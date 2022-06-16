import bgWrapper from '../../img/desktop/bg-wrapper.webp'

const HomeBg = () => {
  const style = {
    backgroundImage: `url(${bgWrapper})`,
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    inset: '0',
    zIndex: '-1'
  }
  return (
    <div style={style}></div>
  )
}

export default HomeBg