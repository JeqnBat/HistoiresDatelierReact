import { useStoreActions, useStoreState } from 'easy-peasy'
import React, { useEffect } from 'react'
import { probe } from './scripts/logic'
import Router from './Router'

const App = () => {
  const { appData, responsive, loaded } = useStoreState(state => ({
    appData: state.appData,
    responsive: state.responsive,
    loaded: state.loaded.homePage
  }))
  const { fetchAppData, pickLayout } = useStoreActions(actions => ({
    fetchAppData: actions.fetchAppData,
    pickLayout: actions.pickLayout,
  }))
  
  useEffect(() => {
    fetchAppData()
    pickLayout(probe())
    // eslint-disable-next-line
  }, [])

  return (
    <Router data={appData} responsive={responsive} loaded={loaded} />
  )
}

export default App