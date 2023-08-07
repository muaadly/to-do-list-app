import { useState } from 'react'

// Custom compoents 
import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([0]);

  // Add Task Function
  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])

  }

  // Delete Function 
  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id));
  } 


  return (
    <>
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask} />
      { tasks && (
        <TaskList 
          tasks={tasks} 
          deleteTask= {deleteTask}      
        />
        
        )}
    </div>
    </>
  )
}

export default App
