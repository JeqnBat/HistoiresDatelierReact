import React, { useState } from 'react'
import { useStoreState } from 'easy-peasy'
import '../../../../components/css/advice.css'

const Advice = () => {
  const [active, setActive] = useState(0)
  const { appData } = useStoreState(state => state)
  const advice = appData.advice

  const handleClick = (idx) => {
    setActive(idx)
  }

  return (
    <>
      <div className='spacinho'></div>
      <div id='advice-section'>
        {advice.map((el,idx) => (
          <div key={idx} className={active === idx ? 'fade-in' : ''}>
            <div>{el.id}</div>
            <div>{el.title}</div>
            <div>{el.body}</div>
          </div>
        ))}
      </div>
      <div className='spacinho'></div>
      <div id='advice-section-menu'>
        {advice.map((el, idx) => (
          <div 
            key={el.id}
            className={active === idx ? 'active' : ''}
            onClick={() => handleClick(idx)}
          >{el.id}</div>
        ))}
      </div>
      <div className='spacinho'></div>
    </>
  )
}

export default Advice