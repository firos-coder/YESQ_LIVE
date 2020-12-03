import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from './components/login'
import Register from './components/register'
import Home from './components/home'
import Forgot from './components/forgot_password'
import Verification from './components/verification'

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
        <Route path="/verification">
          <Verification />
        </Route>
      

      </Router>
      
      
    </div>
  )
}

