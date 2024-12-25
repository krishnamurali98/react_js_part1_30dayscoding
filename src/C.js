import React from 'react'
import { GreetContext, GreetContext2 } from './A'

export default function C() { 
    return (
        <GreetContext.Consumer>
            {
                (val) => {
                    return (
                        <GreetContext2.Consumer>
                            {
                                (val2) => {
                                    return (
                                        <div>
                                            <h1>{val}</h1>
                                            <h1>{val2}</h1>
                                        </div>
                                    );
                                }
                            }
                        </GreetContext2.Consumer>
                    );
                }
            }
        </GreetContext.Consumer>
  )
}
