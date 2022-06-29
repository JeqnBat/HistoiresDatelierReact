import { Outlet } from 'react-router-dom'
import { useStoreActions } from 'easy-peasy'
import React, { useEffect } from 'react'
import { sortProducts } from '../../../scripts/logic'

const Naissance = ({ products }) => {
  const { highlightProducts } = useStoreActions(actions => actions)

  useEffect(() => {
    highlightProducts(sortProducts(products, 'naissance').sort((a, b) => a.id - b.id))
    // eslint-disable-next-line
  }, [])

  return (
    <Outlet />
  )
}

export default Naissance