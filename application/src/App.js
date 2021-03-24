import React from 'react';
import TaskList from "./Task/TaskList/TaskList";
import Context from "./context";

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

  return (
      <Context.Provider value={{removeTask}}>
          <div className="wrapper">
              <h1>Task List</h1>
              <TaskList taskList={taskList} readyOnChange={readyOnChange}/>
          </div>
      </Context.Provider>
  );
}

export default App;
