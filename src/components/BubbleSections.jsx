import { Link } from 'react-router-dom'
import './css/bubble-sections.css'

const BubbleSections = ({ data }) => {
  const mainCats = data.categories.filter(el => el.highlight === true)
  return (
    <section id="bubbles">
      {mainCats.map((el) => (
        <div key={el.id} className='bubble-item'>
          <Link to={`${el.link}`}>
            <div style={{backgroundImage: `url(${el.img})`}}></div>
            <div>{el.name}</div>
          </Link>
        </div>
      ))}
    </section>
  )
}

export default BubbleSections
