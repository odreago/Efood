import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { EstiloGlobal } from './styles'
import Rotas from './routes'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <EstiloGlobal />
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export default App
