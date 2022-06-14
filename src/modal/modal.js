import { state, action, thunk } from 'easy-peasy'

const modal = {
  error: null,
  test: [],
  // ACTIONS
  load: action((state, payload) => {
    state.test = payload
  }),
  setError: action((state, payload) => {
    state.error = payload
  }),
  // THUNK
  fetchData: thunk(async actions => {
    try {
      const res = await fetch('./data.json')
      const db = await res.json()
      actions.load(db)
      console.log(db);
    } catch(e) {
      actions.setError(e.message)
    }
  })
}
