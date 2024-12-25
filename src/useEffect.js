import React from 'react'

function UseEffect() {
    React.useEffect(() => {
        alert("We are in use State")
    })

    const [clicked, setClicked] = React.useState();
    
    return (
        <div>
            <button onClick={() => setClicked('Hello')}>Hello</button><br /><br />
            <button onClick={() => setClicked('World')}>World</button><br /><br />
            <button onClick={() => setClicked('Bye')}>Bye</button><br /><br />
            <h1>
                {clicked}
            </h1>
        </div>
  )
}

export default UseEffect
