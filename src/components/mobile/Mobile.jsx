import Header from './Header'
import HomeSection from './HomeSection'
import Footer from './Footer'

const Mobile = ({ app }) => {
  return (
    <>
      <Header 
        title={app.title} 
        subTitle={app.subtitle} 
        categories={app.categories}
      />
      <main>
        {app.categories.map((cat) => (
          cat.id < 3 ? 
            <HomeSection key={cat.id} catName={cat.name} bgUrl={cat.name} /> 
          : 
            ''
        ))}
      </main>
      <Footer />
    </>
  )
}

export default Mobile
