import React from 'react'

function UseEffect() {
    const [clicked, setClicked] = React.useState();
    const [count, setCount] = React.useState(0);
    
    
    React.useEffect(() => {
        alert("We are in use State")
    }, [clicked])
    
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
