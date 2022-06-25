// Styles for pages are stored in '../index.css'
import HomeBg from '../components/HomeBg'
import BubbleSections from '../components/BubbleSections'
import SquareSections from '../components/SquareSections'
import Values from '../components/Values'
import Quote from '../components/Quote'
import Services from '../components/Services'
import Testimonies from '../components/Testimonies'
import Whatsnew from '../components/Whatsnew'
import FollowUs from '../components/FollowUs'

const HomePage = ({ feed, layout}) => {
  if (layout) {
    return (
      <>
        <div className='spacinho'></div>
        <BubbleSections data={feed} />
        <div className='spacinho'></div>
        <Quote data={feed} />
        <div className='spacinho'></div>
        <SquareSections data={feed} />
        <Values data={feed} />
        <div className='spacinho'></div>
        <Testimonies data={feed} />
        <div className='spacinho'></div>
        <Whatsnew data={feed} />
        <div className='spacinho'></div>
        <FollowUs data={feed} />
      </>
    )
  } else {
    return (
      <>
        <HomeBg />
        <div id='home-spacer'></div>
        <Quote data={feed} />
        <Services data={feed} />
        <div className='spacer'></div>
        <Values data={feed} />
        <div className='spacer'></div>
        <Testimonies data={feed} />
        <Whatsnew data={feed} />
        <div className='spacer'></div>
        <FollowUs data={feed} />
        <div className='spacer'></div>
      </>
    )
  }
}

export default HomePage