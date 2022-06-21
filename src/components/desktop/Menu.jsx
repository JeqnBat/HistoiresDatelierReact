import { Link } from 'react-router-dom'
import './css/menu.css'

const Menu = ({ data }) => {
  return (
    <nav id="d-menu">
      {data.categories.map((el) => (
        el.subCategories.length > 0 ? (
          <span key={el.id}>{el.name}<i className="fa-solid fa-chevron-down"></i>
            <ul>
              {el.subCategories.map((subCat) => (
                <li key={subCat.id}>
                  <Link to={`${el.link}/${subCat.link}`}>{subCat.name}</Link>
                </li>
              ))}
            </ul>
          </span> 
        ) : (
          <span key={el.id}><Link to={el.link}>{el.name}</Link></span>
        )
      ))}
    </nav>
  )
}

export default Menu