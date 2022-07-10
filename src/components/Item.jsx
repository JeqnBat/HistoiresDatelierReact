import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './css/item.css'

const Item = ({ product, accessories }) => {
  const [image, setMainImage] = useState(product.img[0])
  const [selected, setSelected] = useState(null)
  const [extras, setExtras] = useState(accessories)
  const [price, setPrice] = useState(product.price)
  const location = useLocation()
  const [currentLocation, setLocation] = useState(location.pathname)


  // WTFFFFFFFFF
  const navigate = () => {
    if (currentLocation.slice(-1) <= 0) {
      setLocation(currentLocation)
    } else {
      setLocation(currentLocation )
    }  
  }
  const addExtra = (el) => {
    // how does 'extras' Array updates ??
    const item = extras.find(item => item.name === el.name )
      if (!item.purchased) {
        item.purchased = !item.purchased
        setPrice(Number(price) + Number(el.price))
      } else {
        item.purchased = !item.purchased
        setPrice(Number(price) - Number(el.price))
      }
  }

  const handleClick = (payload) => {
    setMainImage(product.img[payload])
    setSelected(payload)
  }

  useEffect(() => {
    console.log(location.pathname);
  }, [location])

  return (
    <div id='item'>
      <div>
        <div></div>
        <div>
          <span>{product.name}</span>
          <span>{product.category}</span>
        </div>
        <div>
          <span 
            onClick={location.pathname.slice(-1) <= 0 ? location.pathname.slice(-1) : location.pathname.slice(-1) - 1}>
            <i className="fa-solid fa-angle-left"></i>
          </span>
          <span><i className="fa-solid fa-angle-right"></i></span>
        </div>
      </div>
      <div className='gallery'>
        <div style={{
          background: `url(${image})`
        }}>
        </div>
        {product.img.map((el, idx) => (
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
        <span>{product.descr}</span>
      </div>
      <div>
        <div>
          <span>{price}</span>
          <span>€</span>
        </div>
        <ul>
          <li>
            <span className='item-prop'>Format</span>
            <span></span>
            <span>{product.format}</span>
          </li>
          <li>
            <span className='item-prop'>Papier</span>
            <span></span>
            <span>{product.paper}</span>
          </li>
          <li>
            <span className='item-prop'>Typographie</span>
            <span></span>
            <span>{product.typography}</span>
          </li>
          <li>
            <span className='item-prop'>Motifs</span>
            <span></span>
            <span>{product.pattern}</span>
          </li>
          <li>
            <span className='item-prop'>Impression</span>
            <span></span>
            <span>{product.verso ? 'recto / verso' : 'recto'}</span>
          </li>
          <li>
            <span className='item-prop'>Pli</span>
            <span></span>
            <span>{product.fold ? 'oui' : 'non'}</span>
          </li>
        </ul>
        <div id="accessories">
          <div>accessoires</div>
            {extras.map((el, idx) => (
              <div key={idx}>
                <div 
                  onClick={() => addExtra(el)}
                  className={el.purchased ? 'purchased' : ''}
                >
                  <i className={el.class}></i>
                </div>
                <div className='tooltip'>
                  <span>{el.descr}</span>
                  <div style={{backgroundImage: `url(${el.img})`}}></div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Item