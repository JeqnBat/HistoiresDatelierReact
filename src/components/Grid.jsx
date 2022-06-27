import { Link, useLocation } from 'react-router-dom'
import './css/grid.css'

const Grid = ({ products }) => {
  let a = useLocation()
  let url = a.pathname.match(/[^\/]*$/)[0]
  let showArticle = Boolean(url.includes('article'))

  return (
    <div id='grid' className={showArticle ? 'hide' : ''}>
      {products.map((product) => (
        <div 
          key={product.id}
          style={{backgroundImage: `url(${product.imageUrl[0]})`}}
          className={product.highlighted ? '' : 'blur'}
        > 
          <Link to={`${product.category}/article=${product.id}`}></Link>
        </div>
      ))}
    </div>
  )
}

export default Grid