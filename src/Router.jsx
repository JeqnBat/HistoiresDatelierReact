import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import Papeterie from './pages/papeterie/Papeterie'
import FairePart from './pages/papeterie/fairepart/FairePart'
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
          <Route path='/' element={<Layout feed={data} responsive={responsive} />}>
            {/* HOME 
            ________________________________________________________ */}
            <Route index element ={<HomePage feed={data} responsive={responsive} />} />
            {/* PAPETERIE 
            ________________________________________________________ */}
            <Route path='papeterie' element={<Papeterie feed={data} layout={responsive} />} >
              <Route path='faire-part/*' element={<FairePart layout={responsive} data={data} />} />
              <Route path='papeterie-decorative' element={<PapeterieDecorative feed={data} layout={responsive} />} />
              <Route path='*' element={<h1>404</h1> } />
            </Route>
            {/* WEDDING DESIGN
            ________________________________________________________ */}
            <Route path='wedding-design' element={<WeddingDesign />} />
            {/* PROFESSIONNELS */}
            <Route path='professionnels' element={<Pro />}>
              <Route path='set-design' element={<SetDesign />} />
              <Route path='event-design' element={<EventDesign />} />
              <Route path='*' element={<h1>404</h1> } />
            </Route>
            {/* ATELIER 
            ________________________________________________________ */}
            <Route path='atelier' element={<Atelier />} />
            {/* CONTACT 
            ________________________________________________________ */}
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