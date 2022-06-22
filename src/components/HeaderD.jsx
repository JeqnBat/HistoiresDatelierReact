import MenuD from './MenuD'
import MainLogo from './MainLogo'
import './css/header.css'

const HeaderD = ({ data }) => {
  return (
    <header>
      <MainLogo data={data} />
      <MenuD data={data} />
    </header>
  )
}

export default HeaderD