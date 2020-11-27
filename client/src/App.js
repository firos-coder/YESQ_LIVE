import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Forgot from './components/forgot_password'

export default function App() {
  return (
    <div>
      <Router>
      
      <Route exact path="/">
        <Register/>
      </Route>
     <Route path="/Login">
      <Login/>
        </Route>
        <Route path="/Home">
      <Home/>
        </Route>
        <Route path="/Forgot">
          <Forgot />
        </Route>
      

      </Router>
      
      
    </div>
  )
}

