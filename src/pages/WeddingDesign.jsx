import { useStoreActions, useStoreState } from 'easy-peasy'
import { useEffect } from 'react'
import Loading from '../components/Loading'
import ProductHeader from '../components/ProductHeader'
import Grid from '../components/Grid'

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
    setPageName('wedding-design')
    fetchProductsData()
    // eslint-disable-next-line
  }, [])

  if (loaded) {
    return (
      <>
        <ProductHeader productName={'notre offre de wedding design'}/>
        <section id='wrapper'>
          <div style={{width: '100px'}}></div>
          <Grid products={products.weddingDesign} showDetails={false} size={'smaller'} />
          <div style={{width: '100px'}}></div>
        </section>
        <div className='spacinho'></div>
      </>
    )
  } else {
    return <Loading />
  }
}

export default WeddingDesign