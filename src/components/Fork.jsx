import Mobile from './mobile/Mobile'
import Desktop from './desktop/Desktop'
import { probe } from '../scripts/logic.js'
import { useStoreActions, useStoreState } from 'easy-peasy'
import React, { useEffect } from 'react'

import { 
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom'
import P from '../routes/P'
import FairePart from '../routes/fairePart'
import PapeterieDecorative from '../routes/papeterieDecorative'
import WeddingDesign from '../routes/weddingDesign'
import SetDesign from '../routes/setDesign'
import EventDesign from '../routes/eventDesign'
import Presentation from '../routes/presentation'
import Contact from '../routes/contact'

const Fork = () => {
  const { responsive, appData, loaded } = useStoreState(state => ({
    responsive: state.responsive,
    appData: state.appData,
    loaded: state.loaded
  }))
  const { pickLayout, fetchData } = useStoreActions(actions => ({
    pickLayout: actions.pickLayout,
    fetchData: actions.fetchData
  }))
  
  useEffect(() => {
    fetchData()
    pickLayout(probe())
    // eslint-disable-next-line
  }, [])

  if(loaded) {
    return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={responsive ? <Mobile app={appData} /> : <Desktop app={appData} />} />
        <Route path='p' element={<P data={appData} />}>
          <Route path='papeterie/fairePart' element={<FairePart />} />
          <Route path='papeterie/papeterieDecorative' element={<PapeterieDecorative />} />
          <Route path='weddingDesign' element={<WeddingDesign />} />
          <Route path='pro/setDesign' element={<SetDesign />} />
          <Route path='pro/eventDesign' element={<EventDesign />} />
          <Route path='presentation' element={<Presentation />} />
          <Route path='contact' element={<Contact />} />
        </Route>
        <Route
          path="*"
          element={
            <main>
              <p>Oups. 404</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
    )
  }
  return (
    <p>loading…</p>
  )
}

export default Fork