import MenuD from './MenuD'
import MainLogo from './MainLogo'
import './css/header.css'

const HeaderD = ({ data, pageName }) => {
  return (
    <header className={pageName === 'home-page' ? '' : 'small-header'}>
      <MainLogo data={data} small={pageName === 'home-page' ? false : true} />
      <MenuD data={data} />
    </header>
  )
}

export default HeaderD