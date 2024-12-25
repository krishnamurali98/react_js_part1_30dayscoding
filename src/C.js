import React, { useContext } from 'react'
import { GreetContext } from './A'




export default function C() { 
    const useCon1 = useContext(GreetContext)
    return (
        <h1>Greet : {useCon1.greet} {useCon1.greet2} </h1>
  )
}
