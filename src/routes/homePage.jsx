import HomeBg from '../components/HomeBg'
import HeaderM from '../components/HeaderM'
import HeaderD from '../components/HeaderD'
import BubbleSections from '../components/BubbleSections'
import SquareSections from '../components/SquareSections'
import Values from '../components/Values'
import Quote from '../components/Quote'
import Services from '../components/Services'
import Testimonies from '../components/Testimonies'
import Whatsnew from '../components/Whatsnew'
import FollowUs from '../components/FollowUs'
import Footer from '../components/Footer'
import { useStoreState } from 'easy-peasy'
// Styles for this page are stored in '../index.css'

const HomePage = ({ feed }) => {
  const { responsive } = useStoreState(state => state)
  if (responsive) {
    return (
      <>
        <main>
          <HeaderM data={feed} />
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
        </main>
        <Footer data={feed} />
    </>
    )
  } else {
    return (
      <>
        <main>
          <HomeBg />
          <HeaderD data={feed} />
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
        </main>
        <Footer data={feed} />
      </>
    )
  }
}

export default HomePage