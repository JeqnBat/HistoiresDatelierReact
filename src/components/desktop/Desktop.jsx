import HomeBg from './HomeBg'
import Header from './Header'
import Quote from './Quote'
import Services from './Services'
import Values from './Values'
import Testimonies from './Testimonies'
import Whatsnew from './Whatsnew'
import FollowUs from '../global/FollowUs'
import './css/desktop.css'

const Desktop = ({ app }) => {
  return (
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
  )
}

export default Desktop