import { Routes, Route } from 'react-router-dom'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { useEffect } from 'react'
import ProductHeader from '../../../components/ProductHeader'
import Loading from '../../../components/Loading'
import Controller from '../../../components/Controller'
import Grid from '../../../components/Grid'
import All from './All'
import Mariage from './Mariage'
import Naissance from './Naissance'
import Bapteme from './Bapteme'
import SurMesure from './SurMesure'
import Advice from './Advice'
import ItemView from './item/ItemView'

const FairePart = ({ data }) => {
  const { faireParts, loaded } = useStoreState(state => ({
    faireParts: state.fairePart.products,
    loaded: state.loaded.fairePart
  }))
  const { setPageName, fetchFairePartData } = useStoreActions(actions => ({
    setPageName: actions.setPageName,
    fetchFairePartData: actions.fetchFairePartData
  }))
  
  useEffect(() => {
    setPageName('faire-part')
    fetchFairePartData()
    // eslint-disable-next-line
  }, [])

  if (loaded) {
    return (
      <>
        <ProductHeader />
        <section id='wrapper'>
          {/* Left div */}
          <Controller data={data} />
          {/* Center div */}
          <div>
            <Routes>
              <Route path='/' element={<All products={faireParts} />} />
              <Route path='mariage' element={<Mariage products={faireParts} />} >
                <Route path='article=:id' element={<ItemView products={faireParts} />} />
              </Route>
              <Route path='naissance' element={<Naissance products={faireParts} />} >
                <Route path='article=:id' element={<ItemView products={faireParts} />} />
              </Route>
              <Route path='bapteme' element={<Bapteme products={faireParts} />} >
                <Route path='article=:id' element={<ItemView products={faireParts} />} />
              </Route>
              <Route path='sur-mesure' element={<SurMesure products={faireParts} />} />
              <Route path='conseils' element={<Advice />} />
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