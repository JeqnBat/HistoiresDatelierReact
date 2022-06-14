import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/mobile/App'
import getData from './fetcher'

const root = ReactDOM.createRoot(document.getElementById('root'))

// 1. DEVICE IS MOBILE ____________________________________ */
/**
 * <b>DESCR:</b><br>
 * Checks if device has a touchscreen AND viewport width smaller
 * than 550 pixels
 * 
 * @function
 * @returns { boolean } TRUE if the 2 parameters are valid
 */
function deviceIsMobile() {
	let deviceParameters = {
		touchScreen: !!navigator.maxTouchPoints,
		width: window.innerWidth < 550 ? true : false
	}
	return Object.values(deviceParameters).every(Boolean)
}
// 2. INIT ________________________________________________ */
/**
 * <b>DESCR:</b><br>
 * IIFE when page is loaded.
 * Loads constants asynchronously first
 * Detects type of viewport (mobile / desktop) & prints
 * the web components accordingly.
 * 
 * @function
 */
// (async function init() {
//   const data = await getData()

// 	if (deviceIsMobile()) {
//     root.render(
//       // REACT STRICT MODE
//       <App constants={data} />
//       // REACT STRICT MODE
//     )
// 	} else {
//     root.render(
//       <React.StrictMode>
//         <h1>not a mobile viewport</h1>
//       </React.StrictMode>
//     )
// 	}
// })()

/* NEW INIT
________________________________________________________ */
root.render(
  <App />
)