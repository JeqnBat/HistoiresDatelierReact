import { useStoreActions } from 'easy-peasy'
import React, { useEffect } from 'react'

const All = ({ products }) => {
  const { highlightProducts } = useStoreActions(actions => actions)
  const resetArr = products.map(({highlighted, ...rest}) => ({highlighted: true, ...rest}))

  useEffect(() => {
    highlightProducts(resetArr)
    // eslint-disable-next-line
  }, [])
  return (
    <></>
  )
}

export default All