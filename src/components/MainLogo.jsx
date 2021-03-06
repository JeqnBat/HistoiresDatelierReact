import { Link } from 'react-router-dom'
import './css/main-logo.css'

const MainLogo = ({ data, footer, small }) => {
  const primaryBackground = {
    background: `center / contain no-repeat url("/img/logo/logo-bg.png")`
  }
  const secondaryBackground = {
    background: `center / contain no-repeat url("/img/logo/logo-bg-white.png")`
  }
  return (
    <Link to='/'>
      <section
        id='logo'
        className={small ? 'small' : ''}
        style={footer ? secondaryBackground : primaryBackground}>
        <span>{data.title}</span>
        <span>{data.subtitle}</span>
      </section>
    </Link>
  )
}

export default MainLogo