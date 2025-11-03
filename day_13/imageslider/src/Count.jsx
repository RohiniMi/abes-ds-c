import React from 'react'
import { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0);
    const decrease = () => setCount(count - 1);
    const increase = () => setCount(count + 1);
    const reset = ()=> setCount(0);
    return (
        <div id="counter">
            <h1>Counter</h1>
            <div className="counter-container">
                <button onClick={decrease}>-</button>
                <span>{count}</span>
                <button onClick={increase}>+</button>
                <button onClick={reset}>reset</button>
            </div>
        </div>
    )
}
export default Count