import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddTaskForm = () => {
    const [NewTask, setNewTask] = useState("")
    const addNewTask = () =>{
        console.log("add new task")
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
