import './css/grid.css'

const Grid = ({ products }) => {
  console.log('grid');
  return (
    <div id='grid'>
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