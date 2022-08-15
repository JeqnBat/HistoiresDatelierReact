import { Link } from 'react-router-dom'
import './css/focus-item.css'

const FocusItem = ({ visible, item, events, showDetails }) => {
  if (visible) {
    const style = {
      backgroundImage: `url(${item.img[0]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
    return (
      <div id='screener' onClick={events}>
        <div id='previous' onClick={events}>
          <i className='fa-solid fa-chevron-left'></i></div>
        <div onClick={events}>
          <div style={style}></div>
          <div id='close' onClick={events}>
            <i className='fa-solid fa-xmark'></i>
          </div>
          <div className='spacer'></div>
          <div className='spacer'></div>
          <div className='spacer'></div>
          <div className='spacer'></div>
          <div id='details' className={showDetails ? '' : 'hide'} onClick={events}>
            <Link to={`${item.category}/article=${item.id}`}>
              <span>
                fiche détaillée
              </span>
            </Link>
          </div>
        </div>
        <div id='next' onClick={events}>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    )
  } else {
    return
  }
}

export default FocusItem