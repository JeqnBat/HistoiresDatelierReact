import { Outlet } from 'react-router-dom'
import { useStoreState } from 'easy-peasy'
import HeaderD from '../components/HeaderD'
import HeaderM from '../components/HeaderM'
import Footer from '../components/Footer'

const Layout = ({ feed, responsive }) => {
  const { pageName } = useStoreState(state => state)

  if (responsive) {
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
          <HeaderD data={feed} pageName={pageName} />
          <Outlet />
        </main>
        <Footer data={feed} />
      </>
    )
  }
}

export default Layout