import React, { useState } from 'react'
import './css/item.css'

const Item = ({ details }) => {
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
        <p>{details.name} - {details.price}</p> 
        <p>{details.category}</p>
        <ul>
          <li>{details.format}</li>
          <li>{details.paper}</li>
        </ul>
        <div id="accessories">
          <div>
            <div></div>
            <div>Enveloppes</div>
          </div>
          <div>
            <div></div>
            <div>Fleurs</div>
          </div>
          <div>
            <div></div>
            <div>Rubans</div>
          </div>
        </div>
        <p>{details.descr}</p>
      </div>
    </div>
  )
}

export default Item