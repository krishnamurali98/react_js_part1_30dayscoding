import React, { createContext } from 'react'
import B from './B';

const GreetContext = createContext();

export default function A() {
    const greet = "Hello";
    const greet2 = "World";
    return (
        <div>
            <GreetContext.Provider value={{greet, greet2}}>
                <B />
            </GreetContext.Provider>
        </div>
    )
}

export {GreetContext}