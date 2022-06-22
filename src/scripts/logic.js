// Get device's type & update state accordingly
const probe = () => {
  const deviceParameters = {
    touchScreen: !!navigator.maxTouchPoints,
    width: window.innerWidth < 550 ? true : false
  }
  return Object.values(deviceParameters).every(Boolean)
}
// Format string from DB w/ paragraphs & styling
const paragraphs = (string) => {
  const str = string.split('.') 
  return str.map((e, idx) => (
    idx !== str.length - 1?
    <p key={idx}>{e}.</p>
    :
    <p key={idx}>{e}</p>
  ))
}

export { paragraphs, probe }