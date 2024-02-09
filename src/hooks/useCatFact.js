import { useEffect, useState } from "react"
import { getRandomFact } from "../services/facts"

export function useCatFact () {
    const [fact, setFact] = useState()
  
    const refreshRandomFact = () => {
      getRandomFact().then(setFact)
    }
  
    //Recuperar cita al caragr la pagina
  
    useEffect(() => {
      refreshRandomFact
    }, [])
  
    return { fact, refreshRandomFact}
  }