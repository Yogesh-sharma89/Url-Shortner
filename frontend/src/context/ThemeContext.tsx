import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";

const THEME_STORAGE_KEY = "url-shortener-theme";

const THEMES = {
  DARK: "dark",
  LIGHT: "light",
  SYSTEM: "system",
};

type ThemeContextValue = {
  theme: string;
  setTheme: (theme: string) => void;
  finalTheme: string;
  themes: typeof THEMES;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const getStoredTheme = () => {
  if (typeof window === "undefined") {
    return THEMES.SYSTEM;
  }

  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (storedTheme && Object.values(THEMES).includes(storedTheme)) {
    return storedTheme;
  }

  //not exists in THEMES obj
  return THEMES.SYSTEM;
};

// get system theme

const getSystemTheme = () => {
  if (typeof window === "undefined") {
    return THEMES.LIGHT;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? THEMES.DARK
    : THEMES.LIGHT;
};

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState(getStoredTheme);

  const [systemTheme, setSystemTheme] = useState(getSystemTheme);

  const finalTheme = theme === THEMES.SYSTEM ? systemTheme : theme;

  const setTheme = useCallback((theme: string) => {
    if (!Object.values(THEMES).includes(theme)) {
      console.log(`Invalid theme : ${theme}`);
      return;
    }

    setThemeState(theme);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme; //this set <html data-theme="theme"/>
    root.style.colorScheme = finalTheme; //chnage style based on final resolved theme;
  }, [theme, finalTheme]);

  //if user chnage it's system theme munually or it chnages
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  const values = useMemo(
    () => ({
      theme,
      setTheme,
      finalTheme,
      themes: THEMES,
    }),
    [theme, setTheme, finalTheme, THEMES],
  );

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
};
