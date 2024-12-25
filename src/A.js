import React, { createContext } from 'react'
import B from './B';

const GreetContext = createContext();
const GreetContext2 = createContext();

export default function A() {
    const greet = "Hello";
    const greet2 = "World";
    return (
        <div>
            <GreetContext.Provider value={greet}>
                <GreetContext2.Provider value={greet2}>
                    <B />
                </GreetContext2.Provider>
            </GreetContext.Provider>
        </div>
    )
}

export {GreetContext, GreetContext2}