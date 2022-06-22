import { Routes, Route } from "react-router-dom"
import PapeterieDecorative from "./papeterieDecorative"

const Papeterie = () => {
  return (
    <div>
      <p>papeterie</p>
      <Routes>
        <Route path='/' element={<></>} >
          <Route path='salut' element={<PapeterieDecorative />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Papeterie