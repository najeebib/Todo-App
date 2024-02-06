import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { API_URL } from '../utils';
const AddTaskForm = ({ fetchTasks }) => {
    const [NewTask, setNewTask] = useState("")
    const addNewTask = async () =>{
        try {
            await axios.post(API_URL,{
                name: NewTask,
                completed: false
            });
            await fetchTasks();
            setNewTask("")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <Typography align='center' variant='h2' paddingTop={2} paddingBottom={2}>My tasks list</Typography>
            <div className='addTaskForm'>
                <TextField size='small' label="Task" variant="outlined" value={NewTask} onChange={(e)=> setNewTask(e.target.value)}/>
                <Button disabled={!NewTask.length} variant='outlined' onClick={addNewTask}>
                    <AddIcon/>
                </Button>
            </div>
            
        </div>
    )
}

export default AddTaskForm
