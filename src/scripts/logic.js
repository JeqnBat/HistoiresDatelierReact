// Get device's type & update state accordingly
const probe = () => {
  const deviceParameters = {
    touchScreen: !!navigator.maxTouchPoints,
    width: window.innerWidth < 500 ? true : false
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
// Sort products Array by category
const sortProducts = (products, category) => {
  let stay =
    products
      .filter((el) => el.category === category)
      .map(({highlighted, ...rest}) => ({highlighted: true, ...rest}))
  let update =
    products
      .filter((el) => el.category !== category)
      .map(({highlighted, ...rest}) => ({highlighted: false, ...rest}))
  let newArr = [...stay, ...update]
  
  return newArr
}
// Smooth transition to the viewport's top
const smoothUp = () => {
  if (window.scrollY > 100) {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  } else {
    return
  }
}

export { paragraphs, probe, sortProducts, smoothUp }