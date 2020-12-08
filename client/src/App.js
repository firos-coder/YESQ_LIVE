import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from './components/login'
import Register from './components/register'
import Home from './components/home'
import Forgot from './components/forgot_password'
import Verification from './components/verification'
import ResetPassword from './components/resetpwd'
import RegVerification from './components/reg_verification'
import Userexist from './components/userexist'
import  Notfound from './components/404'

export default function App()
{
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
        <Route path="/resetpassword">
          <ResetPassword />
        </Route>
        <Route path="/regverification">
          <RegVerification />
        </Route>
      
        <Route path="/Userexist">
        <Userexist/>
        </Route>
        <Route path="/Notfound">
          < Notfound/>
        </Route>
       

      </Router>
      
      
    </div>
  )
}

