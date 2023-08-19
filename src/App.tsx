import { useRoutes } from 'react-router-dom'
import { UserContextProvider } from './context/UserContext'

import { routes } from './routes'
const App = () => {
  const elements = useRoutes(routes)

  return <UserContextProvider>
      {elements}
  </UserContextProvider>
}

export default App
