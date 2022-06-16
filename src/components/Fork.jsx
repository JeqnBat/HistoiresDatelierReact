import Mobile from './mobile/Mobile'
import Desktop from './desktop/Desktop'
import { useStoreActions, useStoreState } from 'easy-peasy'
import React, { useEffect } from 'react'

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
  // Get device's type & update state accordingly
  const probe = () => {
    const deviceParameters = {
      touchScreen: !!navigator.maxTouchPoints,
      width: window.innerWidth < 550 ? true : false
    }
    return Object.values(deviceParameters).every(Boolean)
  }
  useEffect(() => {
    fetchData()
    pickLayout(probe())
    // eslint-disable-next-line
  }, [])

  if(loaded) {
    return (
      responsive ? <Mobile app={appData} /> : <Desktop app={appData}/>
    )
  }
  return (
    <p>loading…</p>
  )
}

export default Fork