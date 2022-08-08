import { Outlet, useLocation } from 'react-router-dom'
import { useStoreState } from 'easy-peasy'
import HeaderD from '../components/HeaderD'
import HeaderM from '../components/HeaderM'
import Footer from '../components/Footer'
import BreadCrum from '../components/BreadCrum'

const Layout = ({ feed, responsive }) => {
  const url = useLocation()
  const pageName = useStoreState(state => state.pageName)

  if (responsive) {
    return (
      <>
        <main>
          <HeaderM data={feed} />
          <BreadCrum visible={url.pathname} />
          <Outlet />
        </main>
        <Footer data={feed} />
      </>
    )
  } else {
    return (
      <>
        <main className={pageName === 'home-page' ? 'home-page' : ''}>
          <HeaderD data={feed} pageName={url.pathname} />
          <BreadCrum visible={url.pathname} />
          <Outlet />
        </main>
        <Footer data={feed} />
      </>
    )
  }
}

export default Layout