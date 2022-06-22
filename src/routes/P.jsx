import Footer from '../components/Footer'
import HeaderD from '../components/HeaderD'
import HeaderM from '../components/HeaderM'
import { Outlet } from 'react-router-dom'

const P = ({ feed, layout }) => {
  if (layout) {
    return (
      <>
        <main>
          <HeaderM data={feed} />
          <p>p</p>
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
          <p>p</p>
          <Outlet />
        </main>
        <Footer data={feed} />
      </>
    )
  }
}

export default P