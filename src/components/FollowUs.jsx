import './css/followus.css'

const FollowUs = ({ data }) => {
  return (
    <section id='follow-us'>
      <h3>{data.homePage.followUs}</h3>
      <nav id="social-icons">
        <a href="https://www.facebook.com/HistoiresdAtelier" target="blank">
          <i className="fa-brands fa-facebook-f"></i>
        </a>

        <i className="fa-brands fa-pinterest-p"></i>

        <a href="https://www.instagram.com/histoiresdatelier" target="blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/company/histoires-d-atelier" target="blank">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </nav>
    </section>
  )
}

export default FollowUs