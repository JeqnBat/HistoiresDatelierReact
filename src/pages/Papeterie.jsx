import { Routes, Route } from "react-router-dom"
import PapeterieDecorative from "./PapeterieDecorative"

const Papeterie = () => {
  return (
    <div>
      <p>papeterie</p>
      <Routes>
        <Route path='salut' element={<PapeterieDecorative />} />
      </Routes>
    </div>
  )
}

export default Papeterie