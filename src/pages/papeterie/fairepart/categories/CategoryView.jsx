import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useStoreActions } from 'easy-peasy'
import { sortProducts } from '../../../../scripts/logic'
import Mariage from './Mariage'
import Naissance from './Naissance'
import Bapteme from './Bapteme'
import SurMesure from './SurMesure'
import Advice from './Advice'

const CategoryView = ({ products }) => {
  const { highlightProducts } = useStoreActions(actions => actions)
  const { category } = useParams('category')
  
  useEffect(() => {
    let resetArr
    // If category matches products; filter grid /w product category
    if (category === 'mariage' || category === 'naissance' || category === 'bapteme') { 
      resetArr = sortProducts(products, category).sort((a, b) => a.id - b.id)
    // Else display content
    } else if (category === 'sur-mesure' || category === 'conseils') {
      resetArr = products.map(({highlighted, ...rest}) => ({highlighted: true, ...rest}))
      if (window.scrollY > 100) {
        window.scroll({
          top: 0,
          behavior: 'smooth'
        })
      }
    } else {
      return
    }
    highlightProducts(resetArr)
  }, [category])

  switch(category) {
    case 'mariage':
      return <Mariage />
    case 'naissance':
      return <Naissance />
    case 'bapteme':
      return <Bapteme />
    case 'sur-mesure':
      return <SurMesure />
    case 'conseils':
      return <Advice />
    default :
      return 
  }
}

export default CategoryView