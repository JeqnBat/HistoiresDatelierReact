import { Outlet } from 'react-router-dom'

const home = ({ data }) => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default home