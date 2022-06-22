import Instagram from './Instagram'
import './css/whats-new.css'

const Whatsnew = ({ data }) => {
  return (
    <section id='whats-new'>
      <h1>{data.homePage.whatsNew}</h1>
      <div id='check-insta'>
        <a href='https://www.instagram.com/histoiresdatelier/' target='blank'>
        {data.homePage.followInsta} <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
      <Instagram />
    </section>
  )
}

export default Whatsnew