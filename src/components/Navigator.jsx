import { logDOM } from '@testing-library/react'
import { useStoreActions } from 'easy-peasy'
import '../components/css/navigator.css'

const Navigator = ({ products }) => {
  const { highlightProducts } = useStoreActions(actions => actions)
  const handleClick = (e) => {
    let stay = products.filter((el) => e.currentTarget.id === el.category)
    let update =
      products
        .filter((el) => e.currentTarget.id !== el.category)
        .map(({highlighted, ...rest}) => ({highlighted: !highlighted, ...rest}))
    let newArr = [...stay, ...update]
    highlightProducts(newArr.sort((a, b) => a.id - b.id))
  }

  return (
    <nav id='navigator'>
      <div id='mariage' onClick={(e) => handleClick(e)}>
        <i className='fa-solid fa-champagne-glasses'></i>
        <span>Mariage</span>
      </div>
      <div id='naissance' onClick={(e) => handleClick(e)}>
        <i className='fa-solid fa-baby-carriage'></i>
        <span>Naissance</span>
      </div>
      <div id='bapteme' onClick={(e) => handleClick(e)}>
        <i className='fa-solid fa-church'></i>
        <span>Baptême</span>
      </div>
      <div id='surmesure' onClick={(e) => handleClick(e)}>
        <i className='fa-solid fa-compass-drafting'></i>
        <span>Sur-mesure</span>
      </div>
    </nav>
  )
}

export default Navigator