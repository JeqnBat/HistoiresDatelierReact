import { state, action, thunk } from 'easy-peasy'
import { v4 as uuidv4 } from 'uuid'

const model = {
  // STATE
  error: null,
  responsive: null,
  loaded: false,
  appData: [],
  // ACTIONS
  pickLayout: action((state, payload) => {
    state.responsive = payload
  }),
  load: action((state, payload) => {
    state.appData = payload
    state.loaded = true
  }),
  setError: action((state, payload) => {
    state.error = payload
  }),
  // THUNK
  fetchData: thunk(async actions => {
    try {
      const res = await fetch('/data.json')
      const db = await res.json()
      actions.load(db)
    } catch(e) {
      actions.setError(e.message)
    }
  })
}

export default model