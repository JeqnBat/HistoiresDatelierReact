const BulletMenu = ({ id, idx, active, event }) => {
  return (
    <div 
      key={id}
      className={active === idx ? 'active' : ''}
      onClick={event}
    >
      {id}
    </div>
  )
}

export default BulletMenu