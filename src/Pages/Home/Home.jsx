import React from 'react'
import Header from "../../Component/Header/Header"
import { Outlet } from 'react-router-dom'
function Home() {
  return (
    <main>

      <Header />
      <Outlet />
    </main>
  )
}

export default Home