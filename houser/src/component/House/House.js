import React from 'react';


export default function House(props) {
    return(
        <div>
            <p>{props.element}</p>
            <button onClick={props.delete}>DELETE</button>
        </div>
    )
}