import facebook from '../../img/svg/facebook.svg'
import instagram from '../../img/svg/instagram.svg'
import pinterest from '../../img/svg/pinterest.svg'
import './css/footer.css'

const Footer = () => {
  const alfred = {
    height: "35px",
    width: "35px",
    margin: "10px"
  }
  return (
    <footer id="m-footer">
      <img style={alfred} src={facebook} alt="facebook" />
      <img style={alfred} src={instagram} alt="instagram" />
      <img style={alfred} src={pinterest} alt="pinterest" />
      <p>mentions légales</p>
    </footer>
  )
}

export default Footer
