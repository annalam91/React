/*useEffect after render example
colour = Previous tutorial learning about useEffect.
Document.title = useEffect after render
name = Conditionally run useEffect
*/

import React, { useState, useEffect } from 'react';
import randomColour from 'randomcolor';

function CounterUseEffect() {
    const [count, setCount] = useState(0)
    const [colour, setColour] = useState("");
    const [name, setName ] = useState("");

    // Example of useEffect for the example 1, 2, 3
    useEffect(() => {
        document.title = `Clicked ${count} times`
        setColour(randomColour())
    }, [count])

    return (
        <div>
            <h3>Example of background changing colour, document.title changing and name changing within use Effect</h3>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <br />
            <button onClick={() => setCount(count + 1 )}>
                <h4 style={{backgroundColor:colour}}>Click {count} times</h4>
            </button>
        </div>
    )
}
export default CounterUseEffect;