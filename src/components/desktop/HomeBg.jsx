import bgWrapper from '../../img/desktop/bg-wrapper.webp'

const HomeBg = () => {
  const style = {
    backgroundImage: `url(${bgWrapper})`,
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