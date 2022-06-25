import { action, thunk } from 'easy-peasy'
import { v4 as uuidv4 } from 'uuid'

const model = {
  // STATE
  error: null,
  responsive: null,
  loaded: {
    homePage: false,
    fairePart: false
  },
  pageName: null,
  appData: [],
  fairePart: [],
  // ACTIONS
  pickLayout: action((state, payload) => {
    state.responsive = payload
  }),
  loadAppData: action((state, payload) => {
    state.appData = payload
    state.loaded.homePage = true
  }),
  loadFairePartData: action((state, payload) => {
    state.fairePart = payload
    state.loaded.fairePart = true
  }),
  setError: action((state, payload) => {
    state.error = payload
  }),
  setPageName: action((state, payload) => {
    state.pageName = payload
  }),
  highlightProducts: action((state, payload) => {
    console.log(payload);
    state.fairePart.products = payload
  }),
  // THUNK
  fetchAppData: thunk(async actions => {
    try {
      const req = await fetch('/data.json')
      const res = await req.json()
      actions.loadAppData(res)
    } catch(e) {
      actions.setError(e.message)
    }
  }),
  fetchFairePartData: thunk(async actions => {
    try {
      const req = await fetch('/fairePart.json')
      const res = await req.json()
      actions.loadFairePartData(res)
    } catch(e) {
      actions.setError(e.message)
    }
  })
}

export default model