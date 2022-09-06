import React, { useReducer, useState } from 'react'

const style = {
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 0',
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    };
}

const Counter = () => {
    const [number, dispatch] = useReducer(reducer, 0);

    const onClickIncrease = () => {
        dispatch({ type: 'INCREMENT' });
    };

    const onClickDecrease = () => {
        dispatch({ type: 'DECREMENT' });
    };

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