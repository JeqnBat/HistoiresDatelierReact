import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import Item from  '../../../../components/Item'

const ItemView = ({ products }) => {
  useEffect(() => {
    if (window.scrollY > 100) {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    } else {
      return
    }
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