import HomeBg from './HomeBg'
import Header from './Header'
import Services from './Services'
import Values from './Values'
import Testimonies from './Testimonies'
import './css/desktop.css'
import { paragraphs } from '../../logic/logic.js'

const Desktop = ({ app }) => {
  return (
    <main id="d-main">
      <HomeBg />
      <Header data={app} />
      <section id="d-spacer"></section>
      <section id="d-quote">
        <span>“</span>
        <h2>{app.homePage.quote}</h2>
        <span>”</span>
      </section>
      <section id="d-descr">
        <h1>{app.homePage.latelier}</h1>
        <div>{paragraphs(app.homePage.latelierdescr)}</div>
      </section>
      <Services data={app} />
      <div className="spacer"></div>
      <Values data={app} />
      <div className="spacer"></div>
      <Testimonies data={app} />
      <div className="spacer"></div>
      <div className="spacer"></div>
    </main>
  )
}

export default Desktop