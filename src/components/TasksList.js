import Tasks from './Tasks'
import React from 'react'
import FormDialog from './NewTaskForm'

export default function TasksList({ tasks, setTasks }) {
  return (
    <div id='tasks-list-container'>
      <div className='tasks-list-header'>
        <h1>Tasks</h1>
        <span className='plus-container'>
          <FormDialog tasks={tasks} setTasks={setTasks} />
        </span>
      </div>
      <Tasks tasks={tasks} />
    </div>
  )
}
