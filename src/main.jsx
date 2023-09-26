import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const data = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={data} />
  </React.StrictMode>,
)
