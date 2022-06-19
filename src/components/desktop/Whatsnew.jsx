import Instagram from '../global/Instagram'
import './css/whatsnew.css'

const Whatsnew = ({ data }) => {
  return (
    <section id='d-whats-new'>
      <h1>{data.homePage.whatsNew}</h1>
      <div id='d-check-insta'>
        <a href='https://www.instagram.com/histoiresdatelier/' target='blank'>
          <i></i>
        {data.homePage.followInsta} <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
      <Instagram />
    </section>
  )
}

export default Whatsnew