import React from 'react'
import ReactDOM from 'react-dom/client'
import { StoreProvider, createStore } from 'easy-peasy'
import model from './scripts/model'
import App from './App'
import './index.css'

const store = createStore(model)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // enable strict mode for production build
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
)