import { useRoutes } from 'react-router-dom'
import { UserContextProvider } from './context/UserContext'

import { routes } from './routes'
import { useTranslation } from 'react-i18next'
const App = () => {
  const elements = useRoutes(routes)
  const { i18n } = useTranslation()

  return <UserContextProvider>
    {elements}
  </UserContextProvider>
}

export default App
