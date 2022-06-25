import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import Papeterie from './pages/Papeterie'
import FairePart from './pages/FairePart'
import PapeterieDecorative from './pages/PapeterieDecorative'
import WeddingDesign from './pages/WeddingDesign'
import Pro from './pages/Pro'
import SetDesign from './pages/SetDesign'
import EventDesign from './pages/EventDesign'
import Atelier from './pages/Atelier'
import Contact from './pages/Contact'

const Router = ({ data, responsive, loaded }) => {
  if (loaded) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout feed={data} layout={responsive} />}>
            <Route index element ={<HomePage feed={data} layout={responsive} />} />
            <Route path='home' element={<HomePage feed={data} layout={responsive} />} />
            <Route path='papeterie/*' element={<Papeterie />}>
              <Route path='faire-part/*' element={<FairePart />} />
              <Route path='papeterie-decorative' element={<PapeterieDecorative />} />
              <Route path='*' element={<h1>404</h1> } />
            </Route>
            <Route path='wedding-design' element={<WeddingDesign />} />
            <Route path='professionnels/*' element={<Pro />}>
              <Route path='set-design' element={<SetDesign />} />
              <Route path='event-design' element={<EventDesign />} />
              <Route path='*' element={<h1>404</h1> } />
            </Route>
            <Route path='latelier' element={<Atelier />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<h1>404</h1> } />
          </Route>
          <Route path='*' element={<h1>404</h1> } />
        </Routes>
      </BrowserRouter>
    )
  }
  return (
    <p>loading…</p>
  )
}

export default Router