import { useState } from 'react'
import './css/menu.css'

const Menu = ({ categories }) => {
  const [menuIsActive, setMenu] = useState(false)
  const [subMenuVis, setSubMenuVis] = useState(
    [
      false,
      false,
      false
    ]
  )
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

      <nav id="nav-bar" className={menuIsActive ? 'active' : null}>

        <div id="menu">
          <p>MENU</p>
          <div id="cross" onClick={displayMenu}>
            <div className="rectangle"></div>
            <div className="rectangle"></div>
          </div>
        </div>

        <ul className="main-menu">
          {categories.map((cat) => (
            cat.hasOwnProperty("subCategories") ? (
            <li key={cat.id} onClick={() => {displaySubMenu(cat.id)}} className={subMenuVis[cat.id] ? "has-sub-menu minus" : "has-sub-menu"}>
                {cat.name}
              <ul className={subMenuVis[cat.id] ? "sub-menu display" : "sub-menu"}>
                {cat.subCategories.map((sub) => (<li key={sub.id}>{sub.name}</li>))}
              </ul>
            </li>
            ) : (
            <li key={cat.id}>{cat.name}</li>
            )
          ))}
        </ul>
        
      </nav>
    </>
  )
}

export default Menu