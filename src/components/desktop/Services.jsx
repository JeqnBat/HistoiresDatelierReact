import './css/services.css'

const Services = ({ data }) => {
  const mainCats = data.categories.filter(el => el.highlight === true)
  return (
    <div id='squares'>
      {mainCats.map((el) => (
        <div 
          key={el.id} 
          className='square-service'
          style={{backgroundImage: `url(${process.env.PUBLIC_URL + el.img})`}}
        >
          <p>{el.name}</p>
          <div className="service-descr">
            {el.descr}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Services