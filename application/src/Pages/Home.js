import React from 'react'
import Context from "../context";
import AddTask from "../Task/AddTask";
import TaskList from "../Task/TaskList/TaskList";

export default function Home() {
    const [taskList, setTaskList] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost/api/tasks', {
            credentials: 'include',
        })
            .then(data => data.json())
            .then(data => {
                setTaskList(data)
            })
    }, [])

    function onUpdateTask(id) {
        setTaskList(taskList.map(task => {
                if (task.id === id) {
                    task.ready = !task.ready
                }

                return task
            })
        );
    }

    function onDeleteTask(id) {
        setTaskList(taskList.filter(task => task.id !== id))
    }

    function onCreateTask(value) {
        setTaskList(taskList.concat([{
            id: Math.floor(Math.random() * 100),
            title: value,
            ready: false
        }]))
    }

    return (
        <Context.Provider value={{onDeleteTask}}>
            <div className="wrapper">
                <h1>Task List</h1>
                <AddTask onCreate={onCreateTask}/>
                {
                    taskList.length
                        ? <TaskList taskList={taskList} readyOnChange={onUpdateTask}/>
                        : 'No tasks'
                }
            </div>
        </Context.Provider>
    )
}