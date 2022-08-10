import { Routes, Route } from 'react-router-dom'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { useEffect } from 'react'
import Loading from '../components/Loading'

const WeddingDesign = () => {
  const { products, loaded } = useStoreState(state => ({
    products: state.products,
    loaded: state.loaded.products
  }))
  const { setPageName, fetchProductsData } = useStoreActions(actions => ({
    setPageName: actions.setPageName,
    fetchProductsData: actions.fetchProductsData
  }))

  useEffect(() => {
    setPageName('faire-part')
    fetchProductsData()
    // eslint-disable-next-line
  }, [])

  if (loaded) {
    return (
      <div className='gallery'>
        {products.weddingDesign.img.map((el, idx) => (
          <div 
            key={idx}
            style={{backgroundImage: `url(${el})`}}></div>
        ))}
      </div>
    )
  } else {
    return <Loading />
  }
}

export default WeddingDesign