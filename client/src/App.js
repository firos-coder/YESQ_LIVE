import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from './components/login'
import Register from './components/register'
import Forgot from './components/forgot_password'
import Verification from './components/verification'
import ResetPassword from './components/resetpwd'
import RegVerification from './components/reg_verification'
import Userexist from './components/userexist'
import Notfound from './components/404'
import Regstep1 from './components/Institute/regstep1'
import Regstep2 from './components/Institute/regstep2'
import Regstep3 from './components/Institute/regstep3'
import Instverification from './components/Institute/instverification'
import Home from '../src/components/Home/home';

export default class App extends Component {
 
  render(){
  
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
  
          <Route path="/institute/registration1">
            < Regstep1 />
          </Route>
  
          <Route path="/institute/registration2">
            < Regstep2 />
          </Route>
  
          <Route path="/institute/registration3">
            < Regstep3 />
          </Route>
  
          <Route path="/institute/verification">
            < Instverification />
          </Route>
         
          <Route path="*">
            < Notfound />
          </Route>
  
          
  
  
        </Switch>
      </BrowserRouter>
  
    )

  }
 
}

