import React, { useState, useEffect } from 'react'
import Header from './Components/Header';
import Task from './Components/Task';
import TaskList from './Components/TaskList';


const App = () => {

  return (
    <>
      <div>
          <Header />
          <TaskList />
      </div>
    </>
  );
};

export default App;
