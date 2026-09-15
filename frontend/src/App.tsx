import ThemeProvider from "./context/ThemeContext"
import AppProvider from "./providers/AppProvider"
import QueryProvider from "./providers/queryProvider"

const App = () => {
  return (
    <>
    <ThemeProvider>
      <QueryProvider>
        <AppProvider/>
      </QueryProvider>
    </ThemeProvider>
    </>
  )
}

export default App
