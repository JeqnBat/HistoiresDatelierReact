import { useLocation, Outlet } from 'react-router-dom'
import '../components/css/grid.css'

const Grid = ({ products }) => {
  const { pathname } = useLocation()
  const url = pathname.match(/[^\/]*$/)[0]

  return (
    <div id='grid'  style={url === 'faire-part' ? {display: ''} : {display: 'none'}}>
      <Outlet />
      {products.map((product) => (
        <div 
          key={product.id}
          style={{backgroundImage: `url(${product.img[0]})`}}
          className={product.highlighted ? '' : 'blur'}
        > 
        </div>
      ))}
    </div>
  )
}

export default Grid