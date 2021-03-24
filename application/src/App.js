import React from 'react';
import TaskList from "./Task/TaskList/TaskList";
import Context from "./context";
import AddTask from "./Task/AddTask";

function App() {
    const [taskList, setTaskList] = React.useState([
        {id: 1, title: 'Training', ready: true},
        {id: 3, title: 'Shopping', ready: false}
    ]);

    function readyOnChange(id) {
        setTaskList(taskList.map(task => {
                if (task.id === id) {
                    task.ready = !task.ready
                }

                return task
            })
        );
    }

    function removeTask(id) {
        setTaskList(taskList.filter(task => task.id !== id))
    }

    function onCreate(value) {
        setTaskList(taskList.concat([{
            id: Math.floor(Math.random() * 100),
            title: value,
            ready: false
        }]))
    }

  return (
      <Context.Provider value={{removeTask}}>
          <div className="wrapper">
              <h1>Task List</h1>
              <AddTask onCreate={onCreate}/>
              {
                  taskList.length
                  ? <TaskList taskList={taskList} readyOnChange={readyOnChange}/>
                  : 'No tasks'
              }
          </div>
      </Context.Provider>
  );
}

export default App;
