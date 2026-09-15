import {
  CheckIcon,
  ChevronDownIcon,
  LaptopIcon,
  Moon,
  type Sun,
  SunIcon,
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "../../../../context/ThemeContext";
import { Link } from "react-router";

interface ThemeOption {
  value: "light" | "dark" | "system";
  label: string;
  icon: typeof Sun;
}

const themeOptions: ThemeOption[] = [
  {
    value: "light",
    label: "Light",
    icon: SunIcon,
  },
  {
    value: "dark",
    label: "Dark",
    icon: Moon,
  },
  {
    value: "system",
    label: "System",
    icon: LaptopIcon,
  },
];

const Navbar = () => {
  
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const { theme, setTheme } = useTheme();

  const activeTheme =
    themeOptions.find((option) => option.value === theme) ?? themeOptions[2];

  const ActiveIcon = activeTheme.icon;

  const handleChangeTheme = (theme: ThemeOption["value"]) => {
    setTheme(theme);
    setIsThemeMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/home" className="logo" aria-label="Shorten home">
          <span className="logo-mark">/</span>
          <span>shorten.</span>
        </Link>

        {/* //theme switcher  */}

        <div className="theme-switcher">
          <button
            type="button"
            className="theme-trigger"
            onClick={() => {
              setIsThemeMenuOpen((prev) => !prev);
            }}
            aria-expanded={isThemeMenuOpen}
          >
            <ActiveIcon size={16} strokeWidth={2} />

            <span>{activeTheme.label}</span>
            <ChevronDownIcon size={15} />
          </button>

          {isThemeMenuOpen && (
            <div className="theme-menu" role="menu">
              {themeOptions.map(({ value, label, icon: Icon }) => {
                const isActive = theme === value;

                return (
                  <button
                    key={value}
                    type="button"
                    className={`theme-option ${isActive ? "active" : ""}`}
                    onClick={() => {
                      handleChangeTheme(value);
                    }}
                    role="menuitem"
                  >
                    <span className="flex items-center gap-2">
                      <Icon size={16} />

                      <span>{label}</span>
                    </span>

                    {isActive && <CheckIcon size={15} />}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
