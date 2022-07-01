import { useLocation, Link } from 'react-router-dom'

import './css/bread-scrum.css'

const BreadScrum = ({ visible }) => {
  const url = useLocation()
  const segments = url.pathname.split('/').filter(el => el.length > 0)
  console.log(segments);
  if (visible === '/') {
    return
    // if there are no sub categories
  } else if (segments.length === 1 ) {
    return (
      <div id='bread-scrum'>
        <Link to='/'>
          <span><i className="fa-solid fa-house"></i></span>
        </Link>
        <Link to={segments[0]}>
          <span>{segments[0]}</span>
        </Link>
      </div>
    )
  } else if (segments.length === 2 ) {
    return (
      <div id='bread-scrum'>
        <Link to='/'>
          <span><i className="fa-solid fa-house"></i></span>
        </Link>
        <Link to={segments[0]}>
          <span>{segments[0]}</span>
        </Link>
        <Link to={segments[0] + '/' + segments[1]}>
          <span>{segments[1]}</span>
        </Link>
      </div>
    )
  } else if (segments.length === 3 ) {
    return (
      <div id='bread-scrum'>
        <Link to='/'>
          <span><i className="fa-solid fa-house"></i></span>
        </Link>
        <Link to={segments[0]}>
          <span>{segments[0]}</span>
        </Link>
        <Link to={segments[0] + '/' + segments[1]}>
          <span>{segments[1]}</span>
        </Link>
        <Link to={segments[0] + '/' + segments[1] + '/' + segments[2]}>
          <span>{segments[2]}</span>
        </Link>
      </div>
    )
  } else if (segments.length === 4 ) {
    return (
      <div id='bread-scrum'>
        <Link to='/'>
          <span><i className="fa-solid fa-house"></i></span>
        </Link>
        <Link to={segments[0]}>
          <span>{segments[0]}</span>
        </Link>
        <Link to={segments[0] + '/' + segments[1]}>
          <span>{segments[1]}</span>
        </Link>
        <Link to={segments[0] + '/' + segments[1] + '/' + segments[2]}>
          <span>{segments[2]}</span>
        </Link>
        <Link to={segments[0] + '/' + segments[1] + '/' + segments[2] + '/' + segments[3]}>
          <span>{segments[3].split('=')[1]}</span>
        </Link>
      </div>
    )
  }
}

export default BreadScrum