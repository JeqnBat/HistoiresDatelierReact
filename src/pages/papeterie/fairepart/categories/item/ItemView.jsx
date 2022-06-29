import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { smoothUp } from '../../../../../scripts/logic'
import Item from  '../../../../../components/Item'

const ItemView = ({ products }) => {
  useEffect(() => {
    smoothUp()
  }, [])

  let { id } = useParams('id')
  let details = products.find(item => item.id === id)

  if (!id) {
    return <h1>404…</h1>
  } else {
    return (
      <>
        <Item details={details} />
        <div className='spacer'></div>
      </>
    )
  }
}

export default ItemView