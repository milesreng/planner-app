import React, { useState } from 'react'
import { Route,
         createBrowserRouter,
         createRoutesFromElements,
         RouterProvider } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import Planner from './pages/Planner'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Home />} />
//       <Route path="/planner" element={<Planner />} />
//     </Route>
//   )
// )

export default function App() {
  // const taskList = props.tasks?.map((task) => task.name)

  return (
    <div className="w-full justify-center">
      <Planner className="mx-auto" />
    </div>
  )
}