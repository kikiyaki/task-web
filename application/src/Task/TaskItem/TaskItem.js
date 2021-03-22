import React from 'react'
import './taskItem.css'

export default function (props) {
    return (
        <li className="task-item-li">
            <label>
                <input type="checkbox"/>
                &nbsp;
                {props.task.title}
            </label>
            <button className="task-item-rm">&times;</button>
        </li>
    )
}