import HomeBg from './HomeBg'
import Header from './Header'
import Services from './Services'
import Quote from '../global/Quote'
import Testimonies from '../global/Testimonies'
import Values from '../global/Values'
import Whatsnew from '../global/Whatsnew'
import FollowUs from '../global/FollowUs'
import Footer from '../global/Footer'
import './css/desktop.css'

const Desktop = ({ app }) => {
  return (
    <>
    <main id="d-main">
      <HomeBg />
      <Header data={app} />
      <div id="d-spacer"></div>
      <Quote data={app} />
      <Services data={app} />
      <div className="spacer"></div>
      <Values data={app} />
      <div className="spacer"></div>
      <Testimonies data={app} />
      <Whatsnew data={app} />
      <div className="spacer"></div>
      <FollowUs data={app} />
      <div className="spacer"></div>
    </main>
    <Footer data={app} />
    </>
  )
}

export default Desktop