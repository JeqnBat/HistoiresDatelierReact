import Header from './Header'
import BubbleSections from './BubbleSections'
import SquareSections from './SquareSections'
import Footer from './Footer'
import Testimonies from './Testimonies'
import { paragraphs } from '../../logic/logic.js'
import './css/mobile.css'

const Mobile = ({ app }) => {
  return (
    <>
      <Header data={app} />
      <main id="m-main">
        <BubbleSections data={app} />
        <h1>{app.homePage.latelier}</h1>
        <div>{paragraphs(app.homePage.latelierdescr)}</div>
        <h1>{app.homePage.services}</h1>
        <SquareSections data={app} />
        <h1>{app.homePage.values.title}</h1>
        <div id="values">
          <p>{app.homePage.values.one}</p>
          <p>•</p>
          <p>{app.homePage.values.two}</p>
          <p>•</p>
          <p>{app.homePage.values.three}</p>
        </div>
        <Testimonies data={app} />
        <h1>{app.homePage.whatsNew}</h1>
      </main>
      <Footer />
    </>
  )
}

export default Mobile
