import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export default function FormDialog({ tasks, setTasks, setAreTasksPending }) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    let newTask = {
      id: new Date().getTime().toString(),
      name: value,
      status: '',
    }
    setTasks([...tasks, newTask])
    setAreTasksPending(true)
    setValue('')
    setOpen(false)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <i className='fa-solid fa-plus fa-xl' onClick={handleClickOpen}></i>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
        <DialogTitle>Add a New Task</DialogTitle>
        <DialogContent>
          <DialogContentText>Tell me what's next...</DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='task'
            label='new task'
            type='text'
            fullWidth
            variant='standard'
            value={value}
            onChange={(e) => handleChange(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
