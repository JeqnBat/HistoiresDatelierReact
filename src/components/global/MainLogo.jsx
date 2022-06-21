
import './css/main-logo.css'

const MainLogo = ({ data, footer }) => {
  const primaryBackground = {
    background: 'center / contain no-repeat url("./img/logo/logo-bg.png")'
  }
  const secondaryBackground = {
    background: 'center / contain no-repeat url("./img/logo/logo-bg-white.png")'
  }

  return (
    <section id="logo" style={footer ? secondaryBackground : primaryBackground}>
      <span>{data.title}</span>
      <span>{data.subtitle}</span>
    </section>
  )
}

export default MainLogo