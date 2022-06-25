import { useStoreActions, useStoreState, useStoreRehydrated } from 'easy-peasy'
import React, { useEffect } from 'react'
import { probe } from './scripts/logic'
import Router from './Router'

const App = () => {
  const rehydrated = useStoreRehydrated()
  const { appData, responsive, loaded } = useStoreState(state => ({
    appData: state.appData,
    responsive: state.responsive,
    loaded: state.loaded
  }))
  const { fetchData, pickLayout } = useStoreActions(actions => ({
    fetchData: actions.fetchData,
    pickLayout: actions.pickLayout,
  }))
  
  useEffect(() => {
    fetchData()
    pickLayout(probe())
    // eslint-disable-next-line
  }, [])

  return (
    <Router data={appData} responsive={responsive} loaded={loaded} />
  )
}

export default App