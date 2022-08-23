import { useStoreActions, useStoreState } from 'easy-peasy'
import { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import ProductHeader from '../components/ProductHeader'
import Grid from '../components/Grid'
import BulletMenu from '../components/BulletMenu'
import '../components/css/wedding-design.css'
import '../components/css/bullet-menu.css'

const WeddingDesign = () => {
  const [activeStep, setActiveStep] = useState(0)
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

  const handleClick = (idx) => {
    setActiveStep(idx)
    console.log(activeStep);
  }

  if (loaded) {
    return (
      <>
        <section id='content-wrapper'>
          <div style={{width: '100px'}}></div>
          <Grid products={products.weddingDesign} showDetails={false} size={'smaller'} />
          <div style={{width: '100px'}}></div>
        </section>
        <div className='spacinho'></div>
        <ProductHeader productName={page.title} />
        <div>{page.subtitle}</div>
        <br></br>
        <div>{page.descr}</div>
        <div className='spacinho'></div>
        {/* new component here */}
        <div id='content-slider'>
          <div>
            <div>PIC 1</div>
            <div>
              <p>CRÉATION</p>
              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ut alias suscipit aliquam quibusdam? Sed incidunt dicta odit perferendis similique corrupti tempore, sapiente harum, unde est deserunt autem iste ullam?</span>
            </div>
          </div>
          <div>
            <div>PIC 2</div>
            <div>
              <p>RÉALISATION</p>
              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ut alias suscipit aliquam quibusdam? Sed incidunt dicta odit perferendis similique corrupti tempore, sapiente harum, unde est deserunt autem iste ullam?</span>
            </div>
            </div>
          <div>
            <div>PIC 3</div>
            <div>
              <p>INSTALLATION</p>
              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ut alias suscipit aliquam quibusdam? Sed incidunt dicta odit perferendis similique corrupti tempore, sapiente harum, unde est deserunt autem iste ullam?</span>
            </div>
            </div>
          </div>
          <div className='spacinho'></div>

          <div id='bullet-menu'>
            {page.steps.map((el, idx) =>
              <BulletMenu key={idx} id={el.id} idx={idx} active={activeStep} event={() => handleClick(idx)} />
            )}
          </div>
        <div className='spacinho'></div>
      </>
    )
  } else {
    return <Loading />
  }
}

export default WeddingDesign