import './css/followus.css'

const FollowUs = ({ data }) => {
  return (
    <section id='d-follow-us'>
      <h3>{data.homePage.followUs}</h3>
      <nav id="d-social-icons">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-pinterest-p"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-linkedin-in"></i>
      </nav>
    </section>
  )
}

export default FollowUs