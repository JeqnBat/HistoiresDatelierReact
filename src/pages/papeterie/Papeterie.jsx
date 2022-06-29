import { Outlet } from 'react-router-dom'


const Papeterie = () => {
  return (
    <>
      <span style={{width: '100%', fontSize: '1rem'}}>breadscrum incoming : papeterie</span>
      <Outlet />
    </>
  )
}

export default Papeterie