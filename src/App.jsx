import { useStoreActions, useStoreState } from 'easy-peasy'
import React, { useEffect } from 'react'
import { probe } from './scripts/logic.js'
import Router from './Router'

const App = () => {
  const { appData, loaded, responsive } = useStoreState(state => ({
    appData: state.appData,
    loaded: state.loaded,
    responsive: state.responsive
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
  return (
    // Factoriser ça en une seule variable tx
    <Router data={appData} responsive={responsive} loaded={loaded} />
  )
}

export default App