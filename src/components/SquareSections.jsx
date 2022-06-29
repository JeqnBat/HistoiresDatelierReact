import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/square-sections.css'

const SquareSections = ({ data }) => {
  const [hidden, setHidden] = useState([false, false, false])

  const handleClick = (id) => {
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
        onClick={() => handleClick(idx)}
      >
        <div
          className={hidden[idx] ? 'square-sections-item slide-left' : 'square-sections-item'}
          style={{backgroundImage: `url(${el.img})`}}
        >
          <p>{el.name}</p>
        </div>
        <div className='square-sections-item-descr'>
          <Link to={el.link}>{el.descr}</Link>
        </div>
      </section>
    ))
  )
}

export default SquareSections