import HomeBg from './HomeBg'
import Header from './Header'
import Services from './Services'
import './css/desktop.css'
import { paragraphs } from '../../logic/logic.js'

const Desktop = ({ app }) => {
  return (
    <main id="d-main">
      <HomeBg />
      <Header data={app} />
      <section id="spacer"></section>
      <section id="quote">
        <span>“</span>
        <h2>{app.homePage.quote}</h2>
        <span>”</span>
      </section>
      <section id="descr">
        <h1>{app.homePage.latelier}</h1>
        <div>{paragraphs(app.homePage.latelierdescr)}</div>
      </section>
      <section id="services">
        <h1>{app.homePage.services}</h1>
        <Services data={app} />
      </section>
    </main>
  )
}

export default Desktop