const getData = async () => {
  try {
      let raw = await fetch('data.json')
      let response = await raw.json()
      return response
  } catch(err) {
      console.log(err.message)
  }
}

export default getData