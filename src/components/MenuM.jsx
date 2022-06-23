import { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/menu.css'

const MenuM = ({ categories }) => {
  const [menuIsActive, setMenu] = useState(false)
  const [subMenuVis, setSubMenuVis] = useState([false,false,false])
  
  const displayMenu = () => {
    setMenu(!menuIsActive)
  }
  const displaySubMenu = (id) => {
    const newState = [...subMenuVis]
    newState[id] = !subMenuVis[id]
    setSubMenuVis(newState)
  }
  return (
    <>
      <div id="hamburger" onClick={displayMenu}>
        <div className="rectangle"></div>
        <div className="rectangle"></div>
        <div className="rectangle"></div>
      </div>
      <nav id="main-menu" className={menuIsActive ? 'active' : null}>
        <div id="menu">
          <p>MENU</p>
          <div id="cross" onClick={displayMenu}>
            <div className="rectangle"></div>
            <div className="rectangle"></div>
          </div>
        </div>
        <ul className="main-menu">
          {categories.map((cat) => (
            cat.subCategories.length > 0 ? (
            <li 
              key={cat.id}
              onClick={() => {displaySubMenu(cat.id)}}
              className={subMenuVis[cat.id] ? "has-sub-menu minus" : "has-sub-menu"}
            >
              {cat.name}
              <ul className={subMenuVis[cat.id] ? "sub-menu display" : "sub-menu"}>
                {cat.subCategories.map((sub) => (
                  <li key={sub.id}>
                    <Link to={`${cat.link}/${sub.link}`} onClick={displayMenu}>{sub.name}</Link>
                  </li>))}
              </ul>
            </li>
            ) : (
              <li key={cat.id}>
                <Link to={cat.link} onClick={displayMenu}>{cat.name}</Link>
              </li>
            )
          ))}
        </ul>
      </nav>
    </>
  )
}

export default MenuM