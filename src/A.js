import React, { createContext } from 'react'
import B from './B';

const GreetContext = createContext();

export default function A() {
    const greet = "Hello";
    return (
        <div>
            <GreetContext.Provider value={greet}>
            </GreetContext.Provider>
        </div>
    )
}

export {GreetContext}