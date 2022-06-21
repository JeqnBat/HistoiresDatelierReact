import { paragraphs } from '../../scripts/logic.js'

const Quote = ({ data }) => {
  return (
    <>
    <section id="d-quote">
      <span>“</span>
      <h2>{data.homePage.quote}</h2>
      <span>”</span>
    </section>
    <section id="d-descr">
      <h1>{data.homePage.latelier}</h1>
      <div>{paragraphs(data.homePage.latelierdescr)}</div>
    </section>
    </>
  )
}

export default Quote