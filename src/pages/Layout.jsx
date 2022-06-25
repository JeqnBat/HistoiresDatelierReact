import HeaderD from '../components/HeaderD'
import HeaderM from '../components/HeaderM'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { useStoreState } from 'easy-peasy'

const Layout = ({ feed, layout }) => {
  const { pageName } = useStoreState(state => state)

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
          <HeaderD data={feed} pageName={pageName} />
          <Outlet />
        </main>
        <Footer data={feed} />
      </>
    )
  }
}

export default Layout