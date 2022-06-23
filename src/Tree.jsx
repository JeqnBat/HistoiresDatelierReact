import { Outlet, BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import P from './pages/P'
import FairePart from './pages/FairePart'
import PapeterieDecorative from './pages/PapeterieDecorative'
import WeddingDesign from './pages/WeddingDesign'
import Pro from './pages/Pro'
import SetDesign from './pages/SetDesign'
import EventDesign from './pages/EventDesign'
import Presentation from './pages/Presentation'
import Contact from './pages/Contact'
import Papeterie from './pages/Papeterie'
import { useStoreState } from 'easy-peasy'

const Tree = ({ data, responsive }) => {
  const { loaded } = useStoreState(state => state)

  if (true) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage feed={data} layout={responsive} />} />
          <Route path='faire-part' element={<FairePart feed={data} />} />
          <Route path='papeterie/*' element={<Papeterie />} />
        </Routes>
      </BrowserRouter>
    )
  }
  return (
    <p>loading…</p>
  )
}

export default Tree