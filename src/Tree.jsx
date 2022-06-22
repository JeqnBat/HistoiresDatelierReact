import { Outlet, BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './routes/homePage'
import P from './routes/p'
import FairePart from './routes/fairePart'
import PapeterieDecorative from './routes/papeterieDecorative'
import WeddingDesign from './routes/weddingDesign'
import Pro from './routes/pro'
import SetDesign from './routes/setDesign'
import EventDesign from './routes/eventDesign'
import Presentation from './routes/presentation'
import Contact from './routes/contact'
import Papeterie from './routes/papeterie'

const Tree = ({ data, loaded, responsive }) => {
  console.log(loaded);
  if (loaded) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage feed={data} layout={responsive} />} />
          <Route path='d' element={<><h2>...</h2> <Outlet /></>}>
            <Route path='about' element={<><h1>et ui</h1></>} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
  return (
    <p>loading…</p>
  )
}

export default Tree