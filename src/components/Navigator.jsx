import { useStoreActions } from 'easy-peasy'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../components/css/navigator.css'

const Navigator = ({ products, app }) => {
  const { highlightProducts } = useStoreActions(actions => actions)
  const [lastClick, setLastClick] = useState(null)
  const [activeCat, setActiveCat] = useState(
    {
      mariage: false, 
      naissance: false, 
      bapteme: false, 
      surmesure: false
    }
  )

  const showActive = (id) => {
    // grid is full active & one category is clicked
    if (Object.values(activeCat).every(value => !value)) {
      const newState = activeCat
      newState[id] = !activeCat[id]
      setActiveCat(newState)
    // category is double clicked
    } else if (lastClick === id) {
      const newState = activeCat
      newState[id] = !activeCat[id]
      setActiveCat(newState)
    // new category is clicked, switch both new & old categories state
    } else {
      const newState = activeCat
      newState[lastClick] = !activeCat[lastClick]
      newState[id] = !activeCat[id]
      setActiveCat(newState)
    }
  }
  
  const handleClick = (e) => {
    setLastClick(e.currentTarget.id)
    // Returns true if only some(not all) categories are hidden
    const activeGrid = products.filter((el) => el.highlighted === false).length !== 0
    // If grid is active && double Click on one category => resets all 'hightlighted' to true
    if (activeGrid && lastClick === e.currentTarget.id) {
      const resetArr = products.map(({highlighted, ...rest}) => ({highlighted: true, ...rest}))
      highlightProducts(resetArr)
      showActive(e.currentTarget.id)
    // If grid is active & new category is clicked
    } else if (activeGrid && lastClick !== e.currentTarget.id) {
      let stay =
        products
          .filter((el) => e.currentTarget.id === el.category)
          .map(({highlighted, ...rest}) => ({highlighted: true, ...rest}))
      let update =
        products
          .filter((el) => e.currentTarget.id !== el.category)
          .map(({highlighted, ...rest}) => ({highlighted: false, ...rest}))
      let newArr = [...stay, ...update]
      highlightProducts(newArr.sort((a, b) => a.id - b.id))
      showActive(e.currentTarget.id)
    // If grid is inactive & category is clicked
    } else {
      let stay =
      products
      .filter((el) => e.currentTarget.id === el.category)
      .map(({highlighted, ...rest}) => ({highlighted: true, ...rest}))
      let update =
      products
      .filter((el) => e.currentTarget.id !== el.category)
      .map(({highlighted, ...rest}) => ({highlighted: false, ...rest}))
      let newArr = [...stay, ...update]
      highlightProducts(newArr.sort((a, b) => a.id - b.id))
      showActive(e.currentTarget.id)
    }
  }
  return (
    <nav id='navigator'>
      {app.navigator.map((el) => (
        <Link to={el.link} key={el.id}>
          <div id={el.divID}>
            <i className={el.icon}></i>
            <span>{el.name}</span>
          </div>
        </Link>
      ))}
    </nav>
  )
}

export default Navigator