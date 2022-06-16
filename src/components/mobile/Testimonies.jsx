import './css/testimonies.css'

const Testimonies = ({ data }) => {
  return(
    <>
      <div id="id-card">
        <p>{data.testimonials[0].author}</p>
        <p>Mariés en {data.testimonials[0].date}</p>
        <p>{data.testimonials[0].subject}</p>
        <p>{data.testimonials[0].message}</p>
      </div>
    </>
  )
}

export default Testimonies