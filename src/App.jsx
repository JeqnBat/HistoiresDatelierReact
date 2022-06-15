import { StoreProvider, createStore } from 'easy-peasy'
import modal from './modal/modal'
import Fork from './components/Fork'

const store = createStore(modal)

const App = () => {
  return (
    <StoreProvider store={store}>
      <Fork />
    </StoreProvider>
  )
}

export default App