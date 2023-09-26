import React, { useState } from 'react'
import TaskList from "../components/TaskList"

export default function Planner() {
    const [ inputTask, setInputTask ] = useState("");
    const [ list, setList ] = useState([]);

    const handleInputChange = (event) => {
        setInputTask(event.target.value);
    }

    const handleAddTask = (task) => {
        const newTask = {
            id: Math.random(),
            task: task
        };
        setList([...list, newTask]);
        setInputTask("");
    }

    const handleDeleteTask = (id) => {
        const newList = list.filter((task) => 
        task.id !== id);

        setList(newList);
    }

    return (
        <div className="mt-12 flex flex-col gap-4 w-5/6 mx-auto">
            <div className="w-full m-auto flex flex-col gap-4 border-2 border-gray rounded-lg bg-slate-200 py-4 px-24">
                <h1 className="text-3xl m-auto">My To-Do List</h1>
                <div className="flex-row flex gap-2 justify-around m-auto w-full md:w-3/4">
                    <input className="w-3/4 m-auto px-2 py-1" 
                        type="text" 
                        value={inputTask} 
                        onChange={handleInputChange} 
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleAddTask(inputTask)
                            };
                        }}
                        placeholder="Input a task..." />
                    <button className="w-1/2 md:w-1/6 bg-slate-100 hover:bg-slate-300 transition-all duration-100 rounded border-2 border-slate-700 px-2"
                        onClick={() => handleAddTask(inputTask)}>add</button>
                </div>
            </div>
            <div>
                <ul className="flex flex-col w-full gap-2">
                    { list.map((task) => (
                        <li className="w-full flex-row flex justify-between border-2 border-slate-400 align-middle px-2 py-2" 
                            key={task.id}>
                            <p className="text-lg">{task.task}</p>
                            <button className="bg-red-100 hover:bg-red-300 transition-colors duration-200 rounded px-2 py-1"
                                onClick={() => handleDeleteTask(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}