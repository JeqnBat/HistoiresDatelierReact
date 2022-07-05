import React, { useState } from 'react'
import './css/item.css'

const Item = ({ details }) => {
  window.addEventListener('select', () => {
    console.log('kikoo');
  })
  const [image, setMainImage] = useState(details.imageUrl[0])
  const [selected, setSelected] = useState(null)
  const [...images] = details.imageUrl

  const handleClick = (payload) => {
    setMainImage(images[payload])
    setSelected(payload)
  }

  return (
    <div id='item'>
      <div className='gallery'>
        <div style={{
          background: `url(${image})`
        }}>
        </div>
        {images.map((el, idx) => (
          <div 
            key={idx}
            onClick={() => handleClick(idx)}
            className={selected === idx ? 'selected' : ''}
            style={{
              background: `url(${el})`,
            }}
          >
          </div>
        ))}
      </div>
      <div>
        <div id='item-header'>
          <div>
            {details.name}
          </div>
          <div>
            {details.price}
          </div>
        </div>
        <p>{details.category}</p>
        <ul>
          <li>{details.format}</li>
          <li>{details.paper}</li>
        </ul>
        <div id="accessories">
          <div>
            <div><i className="fa-solid fa-envelope-open"></i></div>
            <div>Enveloppes</div>
          </div>
          <div>
            <div><i className="fa-solid fa-sun"></i></div>
            <div>Fleurs</div>
          </div>
          <div>
            <div><i className="fa-solid fa-ribbon"></i></div>
            <div>Rubans</div>
          </div>
        </div>
        <p>{details.descr}</p>
      </div>
    </div>
  )
}

export default Item