import React from 'react'
import Context from "../context";
import AddTask from "../Task/AddTask";
import TaskList from "../Task/TaskList/TaskList";

export default function Home() {
    const [taskList, setTaskList] = React.useState([]);

    React.useEffect(() => {
        updateState()
    }, [])

    function updateState() {
        fetch('http://localhost/api/tasks', {
            credentials: 'include',
        })
            .then(data => data.json())
            .then(data => {
                setTaskList(data)
            })
    }

    function onUpdateTask(id) {
        fetch('http://localhost/token', {
            credentials: 'include',
        })
            .then(data => data.json())
            .then(data => {
                localStorage.setItem('XSRF-TOKEN', data.data)
            })
            .then(() => {
                fetch('http://localhost/api/tasks/' + id, {
                    method: 'PUT',
                    credentials: 'include',
                    headers: {
                        'X-CSRF-TOKEN': localStorage.getItem('XSRF-TOKEN')
                    }
                })
                    .then(updateState)
            })
    }

    function onDeleteTask(id) {
        fetch('http://localhost/token', {
            credentials: 'include',
        })
            .then(data => data.json())
            .then(data => {
                localStorage.setItem('XSRF-TOKEN', data.data)
            })
            .then(() => {
                fetch('http://localhost/api/tasks/' + id, {
                    method: 'DELETE',
                    credentials: 'include',
                    headers: {
                        'X-CSRF-TOKEN': localStorage.getItem('XSRF-TOKEN')
                    }
                })
                    .then(updateState)
            })
    }

    function onCreateTask(value) {
        fetch('http://localhost/token', {
            credentials: 'include',
        })
            .then(data => data.json())
            .then(data => {
                localStorage.setItem('XSRF-TOKEN', data.data)
            })
            .then(() => {
                fetch('http://localhost/api/tasks', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'X-CSRF-TOKEN': localStorage.getItem('XSRF-TOKEN'),
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        title: value
                    })
                })
                    .then(updateState)
            })
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