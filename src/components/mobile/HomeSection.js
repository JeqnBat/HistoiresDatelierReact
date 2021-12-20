import './css/homeSection.css'

const HomeSection = ({ catName, bgUrl }) => {
  return (
    <section className={bgUrl + " david"}>
      <h2 className="dunn">{catName}</h2>
    </section>
  )
}

export default HomeSection
