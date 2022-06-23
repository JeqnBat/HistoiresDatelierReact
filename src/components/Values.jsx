import './css/values.css'

const Values = ({ data }) => {
  return (
    <section id="values">
    <h1>{data.values.title}</h1>
      {data.values.items.map((el, idx) => (
        <div key={idx}>{el}</div>
      ))}
    </section>
  )
}

export default Values