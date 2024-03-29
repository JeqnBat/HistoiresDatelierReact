import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import FocusItem from './FocusItem'
import './css/grid.css'
import './css/focus-item.css'

const Grid = ({ products, showDetails, size }) => {
  /* CHILD COMPONENT 'FOCUSITEM' LOGIC ___________________ */
  const [popUp, setPopup] = useState(false)
  const [item, setItem] = useState(null)

  const handleClick = (e) => {
    setPopup(true)
    setItem(products.find(el => el.id === e.currentTarget.id))
  }
  const events = (e) => {
  // Prevent bubbling so 'screener click' does not remove other events
    e.stopPropagation()
    switch (e.currentTarget.id) {
      case 'previous':
        let prevItemID = item.id > 0 ? (Number(item.id) - 1).toString() : item.id
        setItem(products.find(el => el.id === prevItemID))
        break
      case 'next':
        let nextItemID = item.id < products.length - 1 ? (Number(item.id) + 1).toString() : item.id
        setItem(products.find(el => el.id === nextItemID))
        break
      case 'close':
        setPopup(false)
        break
      case 'details':
        setPopup(false)
        break
      case '' :
        break
      default:
        setPopup(false)
        break
    }
  }

  /* COMPONENTS LOGIC ____________________________________ */
  /* Hide grid if user is one level above grid's root path */
  /* I.E : user wants to display one item's details */
  let a = useLocation()
  let url = a.pathname.match(/[^\/]*$/)[0]
  let showArticle = Boolean(url.includes('article')) || Boolean(url.includes('sur-mesure'))

  return (
    <>
      <FocusItem 
        visible={popUp}
        item={item}
        events={events}
        showDetails={showDetails}
      />
      <div 
        id='grid' 
        className={showArticle ? 'hide' : ''}
        style={size === 'smaller' ? {gridTemplateRows: 'repeat(6, 60px)'} : {gridTemplateRows: 'repeat(12, 60px)'}}
      >
        {products.map((product) => (
          <div
            id={product.id} 
            key={product.id}
            style={{backgroundImage: `url(${product.img[0]})`}}
            className={product.highlighted ? '' : 'blur'}
            onClick={(e) => handleClick(e)}
          > 
          </div>
        ))}
      </div>
    </>
  )
}

export default Grid