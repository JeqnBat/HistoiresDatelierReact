import HomeBg from './HomeBg'
import Header from './Header'
import Quote from './Quote'
import Services from './Services'
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
      <section id="d-spacer"></section>
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