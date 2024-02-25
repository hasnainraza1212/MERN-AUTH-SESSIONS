import React from 'react'
import {BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Contact from "../pages/contact/Contact"
import Login from "./../pages/Login/Login"
import Layout from '../pages/Layout/Layout'

const AppRouter = () => {  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="login" element={<Login/>}/>
      </Route>

    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter