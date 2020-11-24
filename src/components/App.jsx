import React from 'react';
import TaskAddFrom from './TaskAddForm';
import TaskAll from './TaskAll';

const App = () => (
  <div className="container">
    <div className="row pt-3">
      <div className="col-12">
        <h1 className="text-center">Менеджер задач Lite</h1>
        <TaskAddFrom />
      </div>
    </div>
    <div>
      <TaskAll />
    </div>
  </div>
);

export default App;
