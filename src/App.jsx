import React from "react"
import Page_login from "./Page_login"
import "./file.css"
import Page_register from "./Page_register"
import { Route, Routes } from "react-router-dom"
import Page_forgot_password from "./Page_forgot_password"

function App() {


  return (
    <>
     <Routes>
        <Route path="/" element={<Page_login />}/>
        <Route path="/register" element={<Page_register />}/>
        <Route path="/forgot_password" element={<Page_forgot_password />}/>
     </Routes>
    </>
  )
}

export default App
