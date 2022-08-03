import { paragraphs } from '../scripts/logic.js'
import './css/quote.css'

const Quote = ({ data }) => {
  return (
    <>
      <section id="quote">
        <span>“</span>
        <h2>{data.homePage.quote}</h2>
        <span>”</span>
      </section>
      <div className='spacinho'></div>
      <section id="descr">
        <div></div>
        <div>
          <h1>{data.homePage.latelier}</h1>
          <div>{paragraphs(data.homePage.latelierdescr)}</div>
        </div>
        <div></div>
      </section>
    </>
  )
}

export default Quote