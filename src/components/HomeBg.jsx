const HomeBg = () => {
  const style = {
    backgroundImage: `url(/img/desktop/bg-wrapper.webp)`,
    backgroundSize: 'cover',
    position: 'absolute',
    inset: '0',
    zIndex: '-1'
  }
  return (
    <div style={style}></div>
  )
}

export default HomeBg