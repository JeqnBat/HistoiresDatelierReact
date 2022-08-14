import './css/product-header.css'

const ProductHeader = ({ productName }) => {
  return (
    <section id='product-header'>
      <div className='sider'></div>
      <div><h4>{productName}</h4></div>
      <div className='sider'></div>
    </section>
  )
}

export default ProductHeader