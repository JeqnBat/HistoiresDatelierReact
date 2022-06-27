import React, { useState } from 'react'
import './css/item.css'

const Item = ({ details }) => {
  const [image, setMainImage] = useState(details.imageUrl[0])
  const [...images] = details.imageUrl

  const handleClick = (payload) => {
    setMainImage(images[payload])
  }

  return (
    <div id='item'>
      <div>
        <div style={{
          background: `url(${image})`,
        }}>
        </div>
        {images.map((el, idx) => (
          <div 
            key={idx}
            onClick={() => handleClick(idx)}
            className=''
            style={{
              background: `url(${el})`,
            }}
          >
          </div>
        ))}
      
      </div>
      <div>{details.name} {details.category}</div>
    </div>
  )
}

export default Item