import { SonnerProvider } from "../components/ui/Sonner"
import { useTheme } from "../context/ThemeContext"
import AppRoutes from "../routes/AppRoutes"


const AppProvider = () => {
  const {finalTheme} = useTheme();
  return (
    <>
      <SonnerProvider theme={finalTheme as "light" | "dark" | "system"}/>
      <AppRoutes/>
    </>
  )
}

export default AppProvider
