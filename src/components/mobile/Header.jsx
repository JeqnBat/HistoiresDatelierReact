import Menu from './Menu'
import './css/header.css'

const Header = ({ title, subTitle, categories }) => {
  return (
    <>
      <header>
        <div id="lang">FR</div>
        <div id="basket"></div>
        <Menu categories={categories} />
        <div id="title">
          <span>{title}</span>
          <span>{subTitle}</span>
        </div>
      </header>
    </>
  )
}

export default Header
