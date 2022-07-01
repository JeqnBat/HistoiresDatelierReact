import { action, thunk } from 'easy-peasy'
import { v4 as uuidv4 } from 'uuid'
import { appData, products } from './constants'

const model = {
  // STATE
  error: null,
  responsive: null,
  loaded: {
    homePage: false,
    products: false,
  },
  appData: [],
  products: [],
  // ACTIONS
  pickLayout: action((state, payload) => {
    state.responsive = payload
  }),
  loadAppData: action((state, payload) => {
    state.appData = payload
    state.loaded.homePage = true
  }),
  loadProductsData: action((state, payload) => {
    state.products = payload
    state.loaded.products = true
  }),
  setError: action((state, payload) => {
    state.error = payload
  }),
  setPageName: action((state, payload) => {
    state.pageName = payload
  }),
  highlightProducts: action((state, payload) => {
    state.products.faireParts = payload
  }),
  setItemView: action((state, payload) => {
    state.itemView = payload
  }),
  // THUNK
  fetchAppData: thunk(async actions => {
    // try {
    //   const req = await fetch('/appData.json')
    //   const res = await req.json()
    //   actions.loadAppData(res)
    // } catch(e) {
    //   actions.setError(e.message)
    // }
    // simpler quicker lighter with constants.js
    actions.loadAppData(appData)
  }),
  fetchProductsData: thunk(async actions => {
    // try {
    //   const req = await fetch('/products.json')
    //   const res = await req.json()
    //   actions.loadFairePartData(res)
    // } catch(e) {
    //   actions.setError(e.message)
    // }
    // simpler quicker lighter with constants.js
    actions.loadProductsData(products)
  })
}

export default model