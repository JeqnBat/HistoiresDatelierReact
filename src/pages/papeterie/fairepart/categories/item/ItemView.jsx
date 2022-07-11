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
  const productIndex = products.faireParts.findIndex(item => item.id === id)
  const accessories = products.accessories

  let  prevProduct, prevLink, nextProduct, nextLink
  if (productIndex <= 0) {
    prevProduct = null
    prevLink = '/#'
  } else if (productIndex >= products.length) {
    nextProduct = null
    nextLink = '/#'
  } else {
    prevProduct = products.faireParts[productIndex - 1]
    prevLink = `../../${prevProduct.category}/article=${prevProduct.id}`
    nextProduct = products.faireParts[productIndex + 1]
    nextLink = `../../${nextProduct.category}/article=${nextProduct.id}`
  }
  
  if (!id) {
    return <h1>404…</h1>
  } else {
    return (
      <>
        <Item product={product} accessories={accessories} prev={prevLink} next={nextLink} />
        <div className='spacer'></div>
      </>
    )
  }
}

export default ItemView