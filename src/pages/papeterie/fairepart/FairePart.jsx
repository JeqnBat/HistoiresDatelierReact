import { Routes, Route } from 'react-router-dom'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { useEffect } from 'react'
import ProductHeader from '../../../components/ProductHeader'
import Loading from '../../../components/Loading'
import Controller from '../../../components/Controller'
import Grid from '../../../components/Grid'
import All from './All'
import CategoryView from './categories/CategoryView'
import ItemView from './categories/item/ItemView'

const FairePart = ({ data }) => {
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
      <>
        <ProductHeader />
        <section id='wrapper'>
          {/* Left div - Controller */}
          <Controller data={data} />
          {/* Center div - Grid */}
          <div>
            <Routes>
              <Route path='/' element={<All products={products.faireParts} />} />
              <Route path=':category' element={<CategoryView products={products.faireParts} />} >
                <Route path='article=:id' element={<ItemView products={products} />} />
              </Route>
            </Routes>
            <Grid products={products.faireParts} />
          </div>
          {/* Right div */}
          <div style={{maxWidth: '100px'}}></div>
        </section>
        <div className="spacer"></div>
      </>
    )
  } else {
    return <Loading />
  }
}

export default FairePart