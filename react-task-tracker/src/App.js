import Header from './components/Header';
import React from 'react';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(  [
    {
    id: 1,
    text: 'Things1',
    day: 'Day1',
    reminder: false,
    },
    { 
    id: 2,
    text: 'Things2',
    day: 'Day2',
    reminder: false,
    },
    {
    id: 3,
    text: 'Things3',
    day: 'Day3',
    reminder: false,
  }]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) +1;

    const newTask = { id, ...task};
    setTasks([...tasks, newTask]);
  }

  //Delete task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !==id))
  }

  //Toggle reminder
  const toggleReminder = (id) =>{
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task));
  }

  return (
    <div className="container">
      <Header class = "header" onAdd={() => setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 
      ? <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
      : 'No Tasks To Show'}
    </div>
  );
}

export default App;
