import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import FocusItem from './FocusItem'
import './css/grid.css'
import './css/focus-item.css'

const Grid = ({ products }) => {
  const [focused, setFocused] = useState(false)
  const [focusedID, setFocusedID] = useState(null)
  let a = useLocation()
  let url = a.pathname.match(/[^\/]*$/)[0]
  let showArticle = Boolean(url.includes('article'))

  const handleClick = (e) => {
    setFocused(true)
    setFocusedID(e.currentTarget.id)
  }

  return (
    <>
      <FocusItem visible={focused} item={products.filter(el => el.id === focusedID)[0]} />
      <div id='grid' className={showArticle ? 'hide' : ''}>
        {products.map((product) => (
          <div
            id={product.id} 
            key={product.id}
            style={{backgroundImage: `url(${product.imageUrl[0]})`}}
            className={product.highlighted ? '' : 'blur'}
            onClick={(e) => handleClick(e)}
          > 
            {/* <Link to={`${product.category}/article=${product.id}`}></Link> */}
          </div>
        ))}
      </div>
    </>
  )
}

export default Grid