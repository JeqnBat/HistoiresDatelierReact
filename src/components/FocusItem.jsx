import './css/focus-item.css'

const FocusItem = ({ visible, item }) => {
  if (visible) {
    const style = {
      backgroundImage: `url(${item.imageUrl[0]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
    return (
      <div id='screener'>
        <div><i className='fa-solid fa-chevron-left'></i></div>
        <div style={style}>
          <div><i className='fa-solid fa-xmark'></i></div>
          <div>
            <span>fiche détaillée</span>
          </div>
        </div>
        <div><i className="fa-solid fa-chevron-right"></i></div>
      </div>
    )
  } else {
    return
  }
}

export default FocusItem