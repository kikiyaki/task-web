import React from 'react';
import TaskList from "./Task/TaskList/TaskList";

function App() {
    const taskList = [
        {id: 1, title: 'Training', ready: true},
        {id: 3, title: 'Shopping', ready: false}
    ];

  return (
      <div className="wrapper">
          <h1>Task List</h1>
          <TaskList taskList={taskList}/>
      </div>
  );
}

export default App;
