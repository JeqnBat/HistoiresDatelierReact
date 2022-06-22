import { StoreProvider, createStore } from 'easy-peasy'
import modal from './scripts/modal'
import Router from './Router'

const store = createStore(modal)

const App = () => {
  return (
    <StoreProvider store={store}>
      <Router />
    </StoreProvider>
  )
}

export default App