import './css/bullet-menu.css'

const BulletMenu = ({ id, idx, active, event }) => {
  return (
    <div
      className={active === idx ? 'active' : ''}
      onClick={event}
    >
      {id}
    </div>
  )
}

export default BulletMenu