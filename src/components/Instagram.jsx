import InstagramFeed  from 'react-ig-feed'
import './css/instagram.css'

const Instagram = () => {
  return <InstagramFeed token={process.env.REACT_APP_API_KEY}  counter="6" />
}

export default Instagram