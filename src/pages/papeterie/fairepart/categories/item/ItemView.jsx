import React, { useState, useEffect } from 'react'
import { useParams, Location } from 'react-router-dom'
import { smoothUp } from '../../../../../scripts/logic'
import Item from  '../../../../../components/Item'

const ItemView = ({ products }) => {
  const accessories = products.accessories
  const { id } = useParams('id')
  const [product, setProduct] = useState(products.faireParts.find(product => product.id === id))

  useEffect(() => {
    smoothUp()
  }, [])

  const events = (e) => {
    // Prevent bubbling so 'screener click' does not remove other events
    e.stopPropagation()
    switch (e.currentTarget.id) {
      case 'prev':
        let prevProductID = product.id > 0 ? (Number(product.id) - 1).toString() : product.id
        setProduct(products.faireParts.find(el => el.id === prevProductID))
        break
      case 'next':
        let nextProductID = product.id < products.faireParts.length - 1 ? (Number(product.id) + 1).toString() : product.id
        setProduct(products.faireParts.find(el => el.id === nextProductID))
        break
      default:
        break
    }
  }
  
  if (!id) {
    return <h1>404…</h1>
  } else {
    return (
      <>
        <Item product={product} accessories={accessories} events={events} />
        <div className='spacer'></div>
      </>
    )
  }
}

export default ItemView