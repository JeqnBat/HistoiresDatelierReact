import React, { useEffect } from 'react'
import { useStoreActions } from 'easy-peasy'
import { Outlet } from 'react-router-dom'
import { sortProducts } from '../../../scripts/logic'

const Bapteme = ({ products }) => {
  const { highlightProducts } = useStoreActions(actions => actions)
  useEffect(() => {
    highlightProducts(sortProducts(products, 'bapteme').sort((a, b) => a.id - b.id))
    // eslint-disable-next-line
  }, [])

  return (
    <Outlet />
  )
}

export default Bapteme