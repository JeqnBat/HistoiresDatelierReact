import { Link } from 'react-router-dom'
import './css/services.css'

const Services = ({ data }) => {
  const mainCats = data.categories.filter(el => el.highlight === true)
  return (
    <section id='services'>
      <h1>{data.homePage.services}</h1>
      <div id='squares'>
        {mainCats.map((el) => (
          <Link key={el.id}  to={el.link}>
            <div className='square-service' style={{backgroundImage: `url(${el.img})`}}>
              <p>{el.name}</p>
              <div className='service-descr'>
                {el.descr}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Services