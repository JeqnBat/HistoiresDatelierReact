import { Link, useLocation } from 'react-router-dom'
import './css/controller.css'

const Controller = ({ app }) => {
  const location = useLocation()
  const url = location.pathname
  const categories = ['mariage', 'naissance', 'bapteme', 'sur-mesure']

  return (
    <nav id='controller'>
      {app.controller.map((el, idx) => (
        <Link to={el.link} key={el.id}>
          <div id={el.divID}  className={url.indexOf(categories[idx-1]) >= 0 ? 'active' : ''}>
            <i className={el.icon}></i>
            <span>{el.name}</span>
          </div>
        </Link>
      ))}
    </nav>
  )
}

export default Controller