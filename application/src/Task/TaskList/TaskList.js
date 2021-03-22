import React from 'react';
import './taskList.css';
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList(props) {
    return (
        <ul className="task-list-ul">
            {props.taskList.map(task => {
                return <TaskItem task={task} key={task.id}/>
            })}
        </ul>
    );
}