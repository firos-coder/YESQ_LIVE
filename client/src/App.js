import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from './Components/login'
import Register from './Components/register'
import Home from './Components/home'
import Forgot from './Components/forgot_password'
import Verification from './Components/verification'
import ResetPassword from './Components/resetpwd'
import RegVerification from './Components/reg_verification'
import Userexist from './Components/userexist'
import Notfound from './Components/404'
import Regstep1 from './Components/Institute/regstep1'
import Regstep2 from './Components/Institute/regstep2'
import Regstep3 from './Components/Institute/regstep3'
import Instverification from './Components/Institute/instverification'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        
        <Route exact path="/">
          <Register />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/forgot">
          <Forgot />
        </Route>

        <Route path="/verification">
          <Verification />
        </Route>

        <Route path="/resetpassword">
          <ResetPassword />
        </Route>

        <Route path="/registerverification">
          <RegVerification />
        </Route>

        <Route path="/userexist">
          <Userexist />
        </Route>

        <Route path="/instituteregistration1">
          < Regstep1 />
        </Route>

        <Route path="/instituteregistration2">
          < Regstep2 />
        </Route>

        <Route path="/instituteregistration3">
          < Regstep3 />
        </Route>

        <Route path="/instituteverification">
          < Instverification />
        </Route>

        <Route path="*">
          < Notfound />
        </Route>

        


      </Switch>
    </BrowserRouter>

  )
}

