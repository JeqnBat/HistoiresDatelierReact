import Header from './Header'
import HomeSection from './HomeSection'
import Footer from './Footer'

const App = ({ constants }) => {
  return (
    <>
      <Header 
        title={constants.home.title} 
        subTitle={constants.home.subtitle} 
        categories={constants.categories} />
      <main>
        {constants.categories.map((cat) => (
          cat.id < 3 ? <HomeSection key={cat.id} catName={cat.name} bgUrl={cat.name} /> : ''
        ))}
        
      </main>
      <Footer />
    </>
  )
}

export default App
