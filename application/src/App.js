import React from 'react';
import TaskList from "./Task/TaskList/TaskList";

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

  return (
      <div className="wrapper">
          <h1>Task List</h1>
          <TaskList taskList={taskList} readyOnChange={readyOnChange}/>
      </div>
  );
}

export default App;
