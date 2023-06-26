'use client'
import React,{useContext} from 'react'
import { contexto } from '@/app/layout'
const Contador = () => {
    const {state, dispatch} = useContext(contexto)

    const sumar = () => {
        dispatch({type:'sumar'})
    }
    const restar = () => {
        dispatch({type:'restar'})
    }

  return (
    <div>
        <h3>el contador vale {state.contador}</h3>
        <button onClick={sumar}>sumar</button>
        <button onClick={restar}>restar</button>
    </div>
  )
}

export default Contador