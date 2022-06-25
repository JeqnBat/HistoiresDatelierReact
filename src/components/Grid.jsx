import '../components/css/grid.css'

const Grid = ({ products }) => {
  return (
    <section id='wrapper'>
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
    </section>
  )
}

export default Grid