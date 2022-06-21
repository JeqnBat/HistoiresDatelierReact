import MainLogo from './MainLogo'
import './css/footer.css'

const Footer = ({ data }) => {
  return (
    <footer>
      <div id="g-footer-wrapper">
        <div>
          <MainLogo data={data} footer={true} />
          {data.footer.visitCard.map((el, idx) => (
            <div key={idx}>{el}</div>
          ))}
        </div>
        <div>
          {data.footer.sitemap.map((el, idx) => (
            <div key={idx}>{el}</div>
          ))}
        </div>
        <div>
          {data.footer.infos.map((el, idx) => (
            <div key={idx}>{el}</div>
          ))}
        </div>
        <div>
          {data.footer.address.map((el, idx) => (
            <div key={idx}>{el}</div>
          ))}
        </div>
        <div>
          {data.footer.contact.map((el, idx) => (
            <div key={idx}>{el}</div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer