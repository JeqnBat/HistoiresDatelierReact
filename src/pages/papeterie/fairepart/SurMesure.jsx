import Tailored from '../../../components/Tailored'
import React, { useEffect } from 'react'

const SurMesure = () => {
  useEffect(() => {
    if (window.scrollY > 100) {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    } else {
      return
    }
  }, [])

  return (
    <Tailored />
  )
}

export default SurMesure