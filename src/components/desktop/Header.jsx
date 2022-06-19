import Menu from './Menu'
import MainLogo from '../global/MainLogo'
import './css/header.css'

const Header = ({ data }) => {
  return (
    <header id="d-header">
      <MainLogo data={data} />
      <Menu data={data} />
    </header>
  )
}

export default Header