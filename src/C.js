import React, { useContext } from 'react'
import { GreetContext, GreetContext2 } from './A'




export default function C() { 
    const useCon1 = useContext(GreetContext)
    const useCon2 = useContext(GreetContext2)
    return (
        <h1>Greet : {useCon1} {useCon2} </h1>
  )
}
