import React, { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

import "../assets/css/main.css"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebarHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar onToggleSidebar={toggleSidebarHandler} />
      <Sidebar isOpen={isOpen} onToggleSidebar={toggleSidebarHandler} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
