import React, { Component } from 'react'
import Navbar from './Navbar'

// import './Layout.css'

class Layout extends Component {
    render() {
        return (
            <div className="h-screen w-full flex flex-col bg-slate-200">
                <Navbar />
            </div>
        )
    }
}

export default Layout