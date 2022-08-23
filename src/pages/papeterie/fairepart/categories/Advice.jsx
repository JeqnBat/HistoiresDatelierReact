import React, { useState } from 'react'
import { useStoreState } from 'easy-peasy'
import BulletMenu from '../../../../components/BulletMenu'
import '../../../../components/css/advice.css'
import '../../../../components/css/bullet-menu.css'

const Advice = () => {
  const [active, setActive] = useState(0)
  const { appData } = useStoreState(state => state)
  const advice = appData.advice

  const handleClick = (idx) => {
    setActive(idx)
  }

  return (
    <section>
      <div id='advice-section'>
        {advice.map((el,idx) => (
          <div key={idx} className={active === idx ? 'fade-in' : ''}>
            <div>{el.id}</div>
            <div>{el.title}</div>
            <div>{el.body}</div>
          </div>
        ))}
      </div>
      <div id='bullet-menu'>
        {advice.map((el, idx) => (
          <BulletMenu key={idx} id={el.id} idx={idx} active={active} event={() => handleClick(idx)} />
        ))}
      </div>
      <div className='spacinho'></div>
    </section>
  )
}

export default Advice