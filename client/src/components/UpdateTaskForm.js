import {Button, Dialog, DialogTitle, TextField } from '@mui/material';
import React, { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';

const UpdateTaskForm = ({ isDialogOpen, setIsDialogOpen, task}) => {
    const {id, completed} = task;
    const [taskName,setTaskName] = useState("");
    return (

        <Dialog open={isDialogOpen}>
            <DialogTitle>Edit task</DialogTitle>
            <div className='dialog'>
                <TextField size='small' label="Task" variant="outlined" value={taskName} onChange={(e)=> setTaskName(e.target.value)}/>
                <Button variant="contained" onClick={()=> setIsDialogOpen(false)}>
                    <CheckIcon/>
                </Button>
            </div>

        </Dialog>

    )
}

export default UpdateTaskForm
