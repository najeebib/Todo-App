import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';
import axios from "axios"
import { useState,useEffect } from 'react';
import { API_URL } from './utils';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  const fetchTasks = async () =>{
    try {
      const {data} = await axios.get(API_URL);
      setTasks(data);
    } catch (err) {
      console.log(ee)
    }
  }
  useEffect(()=>{
    fetchTasks();
  },[]);
  const [tasks,setTasks] = useState([])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AddTaskForm fetchTasks={fetchTasks}/>
      {tasks.map((task) =>{
        <Task task={task} key={task.id} fetchTasks={fetchTasks}/>
      })}
    </ThemeProvider>
  );
}


