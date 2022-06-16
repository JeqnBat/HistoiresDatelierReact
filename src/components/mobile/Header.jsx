import Menu from './Menu'
import './css/header.css'

const Header = ({ data }) => {
  return (
    <>
      <header id="m-header">
        <div id="lang">FR</div>
        <div id="basket"></div>
        <Menu categories={data.categories} />
        <div id="title">
          <span>{data.title}</span>
          <span>{data.subTitle}</span>
        </div>
      </header>
    </>
  )
}

export default Header

