import { Outlet } from 'react-router-dom'
import { useStoreActions } from 'easy-peasy'
import React, { useEffect } from 'react'

const Bapteme = ({ products }) => {
  const { highlightProducts } = useStoreActions(actions => actions)
  let stay =
    products
      .filter((el) => el.category === 'bapteme')
      .map(({highlighted, ...rest}) => ({highlighted: true, ...rest}))
  let update =
      products
        .filter((el) => el.category !== 'bapteme')
        .map(({highlighted, ...rest}) => ({highlighted: false, ...rest}))
  let newArr = [...stay, ...update]

  useEffect(() => {
    highlightProducts(newArr.sort((a, b) => a.id - b.id))
    // eslint-disable-next-line
  }, [])

  return (
    <Outlet />
  )
}

export default Bapteme