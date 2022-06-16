import React, { useState } from 'react'
import './css/square-sections.css'

const SquareSections = ({ data }) => {
  const [hidden, setHidden] = useState([false, false, false])

  const handleHide = (id) => {
    const newState = [...hidden]
    newState[id] = !hidden[id]
    setHidden(newState)
  }
  const mainCats = data.categories.filter(el => el.highlight === true)

  return (
    mainCats.map((el, idx) => (
      <section 
        className='square-sections'
        key={el.name}
        onClick={() => handleHide(idx)}
      >
        <div
          className={hidden[idx] ? 'square-sections-item hide' : 'square-sections-item'}
          style={{backgroundImage: `url(${process.env.PUBLIC_URL + el.img})`}}
        >
          <p>{el.name}</p>
        </div>
        <div className='square-sections-item-descr'>{el.descr}</div>
      </section>
    ))
  )
}

export default SquareSections