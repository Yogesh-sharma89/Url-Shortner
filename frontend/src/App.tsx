import AppProvider from "./providers/AppProvider"
import QueryProvider from "./providers/queryProvider"

const App = () => {
  return (
    <>
      <QueryProvider>
        <AppProvider/>
      </QueryProvider>
    </>
  )
}

export default App
