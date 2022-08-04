import { paragraphs } from '../scripts/logic.js'
import './css/quote.css'

const Quote = ({ data }) => {
  return (
    <>
      <section id='quote'>
        <div className='sider'></div>
        <div>
          <span>“</span>
          <h2>{data.homePage.quote}</h2>
          <span>”</span>
        </div>
        <div className='sider'></div>
      </section>
      <div className='spacinho'></div>
      <section id='descr'>
        <div className='sider'></div>
        <div>
          <h1>{data.homePage.latelier}</h1>
          <div>{paragraphs(data.homePage.latelierdescr)}</div>
        </div>
        <div className='sider'></div>
      </section>
    </>
  )
}

export default Quote