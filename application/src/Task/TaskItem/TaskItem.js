import React from 'react'
import './taskItem.css'

export default function TaskItem({task, readyOnChange}) {
    console.log(task)
    return (
        <li className="task-item-li">
            <label>
                <input type="checkbox" onChange={() => readyOnChange(task.id)}/>
                &nbsp;
                {task.title}
            </label>
            <button className="task-item-rm">&times;</button>
        </li>
    )
}