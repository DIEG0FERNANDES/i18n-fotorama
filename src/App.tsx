import { useRoutes } from 'react-router-dom'
import { UserContextProvider } from './context/UserContext'

import { routes } from './routes'

import { useTranslation } from 'react-i18next'
import i18n from './i18n/i18n'

const foodsMap = new Map<string, string>([
  ['pt', 'arroz e feijão'],
  ['en', 'fish and chips'],
  ['es', 'paelha'],
  ['fr', 'profiterole'],
  ['kor', '김밥']
])

console.log(i18n.language)

const App = () => {
  const elements = useRoutes(routes)

  return <UserContextProvider>{elements}</UserContextProvider>
}

export default App
