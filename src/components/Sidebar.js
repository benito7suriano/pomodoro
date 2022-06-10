import TasksList from './TasksList'
import DateAndTime from './DateAndTime'
import React from 'react'

export default function Sidebar() {
  return (
    <aside id='sidebar'>
      <DateAndTime />
      <TasksList />
    </aside>
  )
}
