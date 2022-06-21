import { Outlet } from 'react-router-dom'
import Header from '../components/desktop/Header'
import Footer from '../components/global/Footer'


const home = ({ data }) => {
  return (
    <>
      <Header data={data} />
      <Outlet />
      <Footer data={data} />
    </>
  )
}

export default home