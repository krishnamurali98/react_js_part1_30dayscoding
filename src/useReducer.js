import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'incr':
            return { count: state.count + 1 }
        case 'decr':
            return { count: state.count - 1 }
        default:
            return state
    }
}

export default function App() {

    // userReducer is a hook that takes a reducer function and an initial state and returns the current state and a dispatch function that can be used to update the state.
    // The reducer function takes the current state and an action and returns the new state.
    // The dispatch function takes an action and calls the reducer function with the current state and the action to get the new state.
    // The new state is then stored in the state variable and the component is re-rendered with the new state.
    // no side effect - pure function

    //  Pure functions: Reducers in React (used with useReducer) are expected to be pure functions, meaning they should only calculate and return the new state based on the given inputs (state and action) without causing any side effects.
    
    //  Side effects: Operations like making an API call or logging to the console are considered side effects because they extend beyond returning a new state.
    

    const [state, dispatch] = useReducer(useReducer, {count : 0});
    
  
  const handleClickInc = () => {
    dispatch({type : "incr"})
  }
  
  const handleClickDec = () => {
    dispatch({type : "decr"})

  }
  
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleClickInc}>+</button>
      <button onClick={handleClickDec}>-</button>
    </div>
  )
}