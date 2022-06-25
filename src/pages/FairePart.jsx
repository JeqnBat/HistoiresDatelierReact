import { Outlet } from 'react-router-dom'
import '../components/css/navigator.css'
import '../components/css/grid.css'

const FairePart = ({ feed }) => {
  return (
      <>
        <div>Votre faire-part</div>
        <nav id='navigator'>
          <div>
          <i className='fa-solid fa-champagne-glasses'></i>
            <span>Mariage</span>
          </div>
          <div>
            <i className='fa-solid fa-baby-carriage'></i>
            <span>Naissance</span>
          </div>
          <div>
            <i className='fa-solid fa-church'></i>
            <span>Baptême</span>
          </div>
          <div>
            <i className='fa-solid fa-compass-drafting'></i>
            <span>Sur-mesure</span>
          </div>
        </nav>
        <section id='wrapper'>
          <div id='grid'>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
          </div>
        </section>
        <div>potentiellement filtres supplémentaires</div>
        <div>the grid</div>
      <Outlet />
      </>
    )
  }
export default FairePart