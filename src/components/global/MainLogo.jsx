
import './css/main-logo.css'

const MainLogo = ({ data }) => {
  const background = {
    background: 'center / contain no-repeat url("./img/logo/logo-bg.png")'
  }
  return (
    <section id="title" style={background}>
      <span>{data.title}</span>
      <span>{data.subtitle}</span>
    </section>
  )
}

export default MainLogo