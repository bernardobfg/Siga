import React from 'react';
import './styles.css'

function  Subject({subject, schedule, color}) {
    return(
        <li className={color}>
            <p>{subject}</p>
            <small>{schedule}</small>
        </li>
    )
}

export default Subject