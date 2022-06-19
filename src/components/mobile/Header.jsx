import Menu from './Menu'
import MainLogo from '../global/MainLogo'
import './css/header.css'

const Header = ({ data }) => {
  return (
    <>
      <header id="m-header">
        <div id="m-top">
          <div id="lang">FR</div>
          <i className="fa-solid fa-bag-shopping"></i>
          <Menu categories={data.categories} />
        </div>
        <MainLogo data={data} />
      </header>
    </>
  )
}

export default Header

