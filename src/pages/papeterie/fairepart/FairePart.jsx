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
  const { faireParts, loaded } = useStoreState(state => ({
    faireParts: state.products.faireParts,
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
              <Route path='/' element={<All products={faireParts} />} />
              <Route path=':category' element={<CategoryView products={faireParts} />} >
                <Route path='article=:id' element={<ItemView products={faireParts} />} />
              </Route>
            </Routes>
            <Grid products={faireParts} />
          </div>
          {/* Right div */}
          <div style={{width: '100px'}}></div>
        </section>
        <div className="spacer"></div>
      </>
    )
  } else {
    return <Loading />
  }
}

export default FairePart