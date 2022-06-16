const paragraphs = (string) => {
  const str = string.split('.') 
  return str.map((e, idx) => (
    idx !== str.length - 1?
    <p key={idx}>{e}.</p>
    :
    <p key={idx}>{e}</p>
  ))
}

export { paragraphs }