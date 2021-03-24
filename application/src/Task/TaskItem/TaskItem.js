import React, {useContext} from 'react'
import './taskItem.css'
import Context from "../../context";

export default function TaskItem({task, readyOnChange}) {
    const {removeTask} = useContext(Context)
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
            <button className="task-item-rm" onClick={() => removeTask(task.id)}>&times;</button>
        </li>
    )
}