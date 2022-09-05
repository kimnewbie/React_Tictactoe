import React, { useState } from 'react'

const Counter = () => {
    const style = {
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px 0',
    }

    const [number, setNumber] = useState(0);

    const onClickIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
    }

    const onClickDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    }

    return (
        <div style={style}>
            <h1>{number}</h1>
            <div>
                <button onClick={onClickIncrease}>+1</button>
                <button onClick={onClickDecrease}>-1</button>
            </div>
        </div>
    )
}

export default Counter;