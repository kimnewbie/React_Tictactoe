import React from 'react';
import './Box.css';

// function Box() : this : 자기 자신
// const Box = () => : this : 자기 자신의 부모

const Box = (props) => { 
    return (
        <div onClick={props.onClick} data-index={props['data-index']} className="box">
            { props.mark }
        </div>
    )
}

export default Box;