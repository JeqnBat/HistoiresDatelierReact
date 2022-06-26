import { Outlet } from 'react-router-dom'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { useEffect } from 'react'
import Navigator from '../components/Navigator'
import Grid from '../components/Grid'

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
  }, [])

  if (loaded) {
    return (
        <>
          <Navigator products={faireParts} app={data} />
          <h4>Votre faire-part</h4>
          <Grid products={faireParts} />
          <Outlet />
        </>
      )
  } else {
    return <p>loading…</p>
  }
}

export default FairePart