import React from 'react'
import './taskItem.css'

export default function TaskItem({task, readyOnChange}) {
    let liClasses = ["task-item-li"];
    if (task.ready) {
        liClasses.push("task-item-li--ready");
    }

    return (
        <li className={liClasses.join(" ")}>
            <label>
                <input
                    type="checkbox"
                    checked={task.ready}
                    onChange={() => readyOnChange(task.id)}/>
                &nbsp;
                {task.title}
            </label>
            <button className="task-item-rm">&times;</button>
        </li>
    )
}