import './css/testimonies.css'
import React, { useState } from 'react'

const Testimonies = ({ data }) => {
  const [index, setIndex] = useState(0)

  const next = () => {
    if(index < data.testimonies.length - 1) {
      setIndex(index+1)
    } else {
      return
    }
  }
  const previous = () => {
    console.log('previous');
    if(index - 1 < 0 ) {
      return
    } else {
      setIndex(index-1)
    }
  }
  return (
    <section id="d-testimonies-wrapper">
      <div><h3>Vos témoignages</h3></div>
      <div>
        <span>{data.testimonies[index].author}</span>
        <span>Mariés en {data.testimonies[index].date}</span>
        <span>À propos de leur faire-part</span>
      </div>
      <div>{data.testimonies[index].message}</div>
        {index === 0 ?
          <>
            <div></div>
            <div onClick={next}>❯</div>
          </>
         : 
          <>
            <div onClick={previous}>❮</div>
            <div onClick={next}>❯</div>
          </>
        }
    </section>
  )
}

export default Testimonies