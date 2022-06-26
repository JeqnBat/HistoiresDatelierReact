import { Routes, Route } from 'react-router-dom'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { useEffect } from 'react'
import Navigator from '../../../components/Navigator'
import Grid from '../../../components/Grid'
import Loading from '../../../components/Loading'
import Mariage from './Mariage'
import Naissance from './Naissance'
import Bapteme from './Bapteme'
import SurMesure from './SurMesure'

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
        <Navigator products={faireParts} app={data} />
        <h4>Votre faire-part</h4>
        <section id='wrapper'>
          <Routes>
            <Route path='/' element={<Grid products={faireParts} />}>
              <Route path='mariage' element={<Mariage products={faireParts} />} />
              <Route path='naissance' element={<Naissance products={faireParts} />} />
              <Route path='bapteme' element={<Bapteme products={faireParts} />} />
              <Route path='sur-mesure' element={<SurMesure products={faireParts} />} />
            </Route>
          </Routes>
        </section>
      </>
    )
  } else {
    return <Loading />
  }
}

export default FairePart