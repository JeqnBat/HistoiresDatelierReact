import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './css/controller.css'

const Controller = ({ data }) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const location = useLocation()
  const url = location.pathname
  const categories = ['mariage', 'naissance', 'bapteme', 'sur-mesure', 'conseils']

  const handleClick = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <nav id='controller' >
      <span onClick={() => handleClick()}>Filtres
        <i className={toggleMenu ? 'fa-solid fa-angle-left' : 'fa-solid fa-angle-right'}></i>
      </span>
      <div className={toggleMenu ? '' : 'show-menu'}>
        {data.controller.map((el, idx) => (
          <Link to={el.link} key={el.id}>
            <div id={el.divID}  className={url.indexOf(categories[idx-1]) >= 0 ? 'active' : ''}>
              <i className={el.icon}></i>
              <span>{el.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Controller