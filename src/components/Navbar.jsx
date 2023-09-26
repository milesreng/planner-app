import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Layout from './Layout'

export default function Navbar() {
    return (
        <div className="flex flex-col h-screen w-full gap-4">
            <div className="w-full flex flex-row p-4 gap-24 text-lg border-b-2 border-b-black">
                <Link to="/">
                    <p>Home</p>
                </Link>
                <Link to="/planner">
                    <p>My Planner</p>
                </Link>
                </div>
            <div className="w-full h-full">
                <Outlet />
            </div>
        </div>
    )
}