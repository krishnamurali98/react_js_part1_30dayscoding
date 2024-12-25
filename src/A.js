import React from 'react'
import B from './B';

export default function A() {
    const greet = "Hello";
    return (
        <div>
            <B greet={greet}/>
        </div>
    )
}
