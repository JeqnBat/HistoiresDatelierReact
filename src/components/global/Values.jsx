import './css/values.css'

const Values = ({ data }) => {
  return (
    <section id="g-values">
    <h1>{data.values.title}</h1>
      {data.values.one.map((el, idx) => (
        <div key={idx}>{el}</div>
      ))}
    </section>
  )
}

export default Values