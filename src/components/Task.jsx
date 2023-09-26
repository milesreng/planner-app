import React from 'react'

export default function Task(props) {
    return (
        <li className="flex flex-col gap-4">
            <div className="flex flex-row gap-2 text-xl">
                <input id={props.id} type="checkbox" defaultChecked={props.completed} />
                <label htmlFor={props.id}>{props.taskname}</label>
            </div>
            <div className="flex flex-row gap-4">
                <button type="button" className="py-2 px-8 border-2 border-black">Edit<span className="visually-hidden">{props.name}</span></button>
                <button type="button" className="py-2 px-8 border-2 border-black">Delete<span className="visually-hidden">{props.name}</span></button>
            </div>
        </li>
    )
}