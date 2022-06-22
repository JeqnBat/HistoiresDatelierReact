import MenuM from './MenuM'
import MainLogo from './MainLogo'
import './css/header.css'

const HeaderM = ({ data }) => {
  return (
    <header>
      <div id='fixed-menu'>
        <div id='lang'>FR</div>
        <i className='fa-solid fa-bag-shopping'></i>
        <MenuM categories={data.categories} />
      </div>
      <div className='spacinho'></div>
      <MainLogo data={data} />
    </header>
  )
}

export default HeaderM

