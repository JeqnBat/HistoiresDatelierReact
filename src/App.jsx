import { useStoreActions, useStoreState } from 'easy-peasy'
import React, { useEffect } from 'react'
import { probe } from './scripts/logic.js'
import Tree from './Tree'

const App = () => {
  const { appData, responsive } = useStoreState(state => ({
    appData: state.appData,
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
    <Tree data={appData} responsive={responsive} />
  )
}

export default App