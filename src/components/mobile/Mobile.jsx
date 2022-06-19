import Header from './Header'
import BubbleSections from './BubbleSections'
import SquareSections from './SquareSections'
import Values from '../global/Values'
import Testimonies from '../global/Testimonies'
import Whatsnew from '../global/Whatsnew'
import FollowUs from '../global/FollowUs'
import Footer from '../global/Footer'
import { paragraphs } from '../../logic/logic.js'
import './css/mobile.css'

const Mobile = ({ app }) => {
  return (
    <>
      <Header data={app} />
      <main id='m-main'>
        <BubbleSections data={app} />
        <h1>{app.homePage.latelier}</h1>
        <div>{paragraphs(app.homePage.latelierdescr)}</div>
        <h1>{app.homePage.services}</h1>
        <SquareSections data={app} />
        <Values data={app} />
        <div className='spacinho'></div>
        <Testimonies data={app} />
        <div className='spacinho'></div>
        <Whatsnew data={app} />
        <div className='spacinho'></div>
        <FollowUs data={app} />
        <div className='spacinho'></div>
        <Footer data={app} />
      </main>
    </>
  )
}

export default Mobile
