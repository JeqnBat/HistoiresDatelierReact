import HeaderD from '../components/HeaderD'
import HeaderM from '../components/HeaderM'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = ({ feed, layout }) => {
  if (layout) {
    return (
      <>
        <main>
          <HeaderM data={feed} />
          <Outlet />
        </main>
        <Footer data={feed} />
      </>
    )
  } else {
    return (
      <>
        <main>
          <HeaderD data={feed} />
          <Outlet />
        </main>
        <Footer data={feed} />
      </>
    )
  }
}

export default Layout