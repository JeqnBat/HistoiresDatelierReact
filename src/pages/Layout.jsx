import { Outlet, useLocation } from 'react-router-dom'
import HeaderD from '../components/HeaderD'
import HeaderM from '../components/HeaderM'
import Footer from '../components/Footer'
import BreadCrum from '../components/BreadCrum'

const Layout = ({ feed, responsive }) => {
  const url = useLocation()

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
        <main>
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