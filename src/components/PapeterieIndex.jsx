import { Link } from 'react-router-dom'
import './css/papeterie-index.css'

const PapeterieIndex = () => {
  const fairePartBg = '/img/categories/faire-part/faire-part.jpg'
  const papeterieDecorativeBg = '/img/categories/papeterie-decorative/papeterie-decorative.webp'
  return (
    <section id="papeterie-index">
      <h1>papeterie</h1>
      <nav>
        <div
          style={{backgroundImage: `url(${fairePartBg})`}}
        >
          <Link to='faire-part'>
            Faire-part
          </Link>
        </div>

        <div
          style={{backgroundImage: `url(${papeterieDecorativeBg})`}}
        >
          <Link to='papeterie-decorative'>
            papeterie-décorative
          </Link>
        </div>
      </nav>
      <div className='spacer'></div>
    </section>
  )
}

export default PapeterieIndex