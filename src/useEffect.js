import React from 'react'

function UseEffect() {
    const [clicked, setClicked] = React.useState();
    const [count, setCount] = React.useState(0);
    
    
    // First return happens and then useEffect runs
    React.useEffect(() => {
        console.log("We are in use State")
        return (() => {
            console.log("return of use state");
        })
    }, [clicked, count])
    
    return (
        <div>
            <button onClick={() => setClicked('Hello')}>Hello</button><br /><br />
            <button onClick={() => setClicked('World')}>World</button><br /><br />
            <button onClick={() => setClicked('Bye')}>Bye</button><br /><br />
            <h1>
                {clicked}
            </h1>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <h1>{count}</h1>

        </div>
  )
}

export default UseEffect
