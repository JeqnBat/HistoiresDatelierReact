import { useStoreActions, useStoreState } from 'easy-peasy'
import { useEffect } from 'react'
import Loading from '../components/Loading'
import ProductHeader from '../components/ProductHeader'
import Grid from '../components/Grid'
import '../components/css/wedding-design.css'

const WeddingDesign = () => {
  const { page, products, loaded } = useStoreState(state => ({
    page: state.appData.weddingDesign,
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
        <section id='wrapper'>
          <div style={{width: '100px'}}></div>
          <Grid products={products.weddingDesign} showDetails={false} size={'smaller'} />
          <div style={{width: '100px'}}></div>
        </section>
        <div className='spacinho'></div>
        <ProductHeader productName={page.title} />
        <div>{page.subtitle}</div>
        <br></br>
        <div className='wedding-design-descr'>{page.descr}</div>
        <div className='spacinho'></div>
      </>
    )
  } else {
    return <Loading />
  }
}

export default WeddingDesign