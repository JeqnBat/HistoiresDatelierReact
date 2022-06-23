import Footer from '../components/Footer'
import HeaderD from '../components/HeaderD'
import HeaderM from '../components/HeaderM'
import { Outlet, Routes, Route } from 'react-router-dom'
import FairePart from './FairePart'

const P = ({ feed, layout }) => {
  if (layout) {
    return (
      <>
        <main>
          <HeaderM data={feed} />
          <p>{feed.title}</p>
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
          <p>{feed.title}</p>
          <Routes>
            <Route path='faire-part' element={<FairePart data={feed} />} />
          </Routes>
        </main>
        <Footer data={feed} />
      </>
    )
  }
}

export default P