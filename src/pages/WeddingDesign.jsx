import { useStoreActions, useStoreState } from 'easy-peasy'
import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import ProductHeader from '../components/ProductHeader'
import '../components/css/wedding-design.css'

const WeddingDesign = () => {
  const [popUp, setPopup] = useState(false)
  const [item, setItem] = useState(null)

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

  const openPopUp = (e) => {
    console.log(e.currentTarget.style.backgroundImage.slice(5, -2));
    let a = e.currentTarget.style.backgroundImage.slice(5, -2)
    setItem(a)
    setPopup(true)
  }
  const closePopup = () => {
    setPopup(false)
  }

  if (loaded) {
    return (
      <>
        <ProductHeader productName={'notre offre de wedding design'}/>
        <div 
          id='screener'
          className={popUp ? '' : 'hide'}
          onClick={closePopup}
        >
          <div id='previous'></div>
          <div><img src={item} /></div>
          <div id='next'></div>
        </div>
        <div className='spacinho'></div>
        <div className='wd-gallery'>
          {products.weddingDesign.img.map((el, idx) => (
            <div 
              key={idx}
              style={{backgroundImage: `url(${el})`}}
              onClick={(e) => openPopUp(e)}
            >
            </div>
          ))}
        </div>
        <div className='spacinho'></div>
      </>
    )
  } else {
    return <Loading />
  }
}

export default WeddingDesign