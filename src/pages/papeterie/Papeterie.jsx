import { Outlet } from 'react-router-dom'
import PapeterieIndex from '../../components/PapeterieIndex'

const Papeterie = () => {
  return (
    <>
      <PapeterieIndex />
      <Outlet />
    </>
  )
}

export default Papeterie