import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { smoothUp } from '../../../../../scripts/logic'
import Item from  '../../../../../components/Item'

const ItemView = ({ products }) => {
  useEffect(() => {
    smoothUp()
  }, [])

  const { id } = useParams('id')
  const product = products.faireParts.find(item => item.id === id)
  const accessories = products.accessories

  if (!id) {
    return <h1>404…</h1>
  } else {
    return (
      <>
        <Item product={product} accessories={accessories} />
        <div className='spacer'></div>
      </>
    )
  }
}

export default ItemView