import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { FontStyles } from './assets/fonts/fonts'
import ptBR from './assets/img/ptBR.png'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <FontStyles />
    <button><img src={ptBR} alt="português" /></button>
    <button>en</button>
    <button>es</button>
    <button>fr</button>
    <button>it</button>
    <App />
  </BrowserRouter>
)
