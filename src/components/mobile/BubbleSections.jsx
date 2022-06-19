import './css/bubble-sections.css'

const BubbleSections = ({ data }) => {
  const mainCats = data.categories.filter(el => el.highlight === true)
  return (
    <section id="m-bubbles">
      {mainCats.map((el) => (
        <div key={el.id} className='bubble-item'>
          <div style={{backgroundImage: `url(${el.img})`}}></div>
          <div>{el.name}</div>
        </div>
      ))}
    </section>
  )
}

export default BubbleSections
