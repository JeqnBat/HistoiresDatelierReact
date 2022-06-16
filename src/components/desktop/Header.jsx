import './css/header.css'
import Menu from './Menu'

const Header = ({ data }) => {
  return (
    <header id="d-header">
      <div id="main-logo">
        <span>{data.title}</span>
        <span>{data.subtitle}</span>
      </div>
      <Menu data={data} />
    </header>
  )
}

export default Header