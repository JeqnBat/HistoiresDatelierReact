import facebook from '../../svg/facebook.svg'
import instagram from '../../svg/instagram.svg'
import pinterest from '../../svg/pinterest.svg'

const Footer = () => {
  const alfred = {
    height: "35px",
    width: "35px",
    margin: "10px"
  }
  return (
    <footer>
      <img style={alfred} src={facebook} alt="facebook" />
      <img style={alfred} src={instagram} alt="instagram" />
      <img style={alfred} src={pinterest} alt="pinterest" />
      <p>mentions légales</p>
    </footer>
  )
}

export default Footer
