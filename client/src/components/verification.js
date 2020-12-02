import React, { Component } from 'react';
import OtpInput from 'react-otp-input';
import '../CSS/verification.css'
import Landing from '../IMAGES/landing.svg'
import axios from 'axios'
import {Redirect} from 'react-router-dom';

export default class App extends Component
 {
        constructor()
        {
            super()
            this.state = 
            {
                otp: '',
                error:" "
            }
           
        }
        
        handleChange = otp => 
        {
        this.setState({ otp });
        }
     
         handleSubmit = (event) =>
        {
            event.preventDefault()
            const value = this.state.otp
            const valueLength = value.length
            if(valueLength === 6)
            {
                console.log(value)
                this.setState({otp: ''})
                 axios.post("",value).then(response=>{
                    
                    return  <Redirect  to="" />
                   
                     
                  }).catch((err) => {
                     
                 })
            }
            else
            {
                console.log("enter valid otp")
                this.setState({error:"Enter Valid OTP"})
            }
      
        }
 
        render()
         {
            return(
                    <div className='white'>
                        <div className="container">
                            <div className="row d-flex align-items-center vh-100">
                                <div className="col-md-6 card-new">
                                    <div className="card1 pb-5">
                                        <div className="row px-3  mt-4 mb-5 border-line">
                                            <img src={Landing} alt='logo'/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 m-auto">
                                    <div id="login" className="mar-btom-0">
                                        <aside>
                                            <div className="text-center">
                                                <h3>Verification</h3>
                                            </div>
                                            <div className="text-center add_top_10 font-12 verifictn-subhead">Please type the verification code<br/>
                                                send to 1234567890
                                                {this.state.error?<div className="otp-errormsg">{this.state.error}</div> : ''}
                                            </div>
                                            <form onSubmit={this.handleSubmit.bind(this)}>
                                                <div className="form-group">
                                                    <div className="code_group">
                                                        <div className="row code-box-marg"></div>
                                                            <OtpInput
                                                                                        
                                                                value={this.state.otp}
                                                                onChange={this.handleChange}
                                                                numInputs={6}
                                                                separator={<span>  </span>}
                                                                isInputNum="true"
                                                                inputStyle="code-box"
                                                                containerStyle="otp-box"
                                                            />
                                                            
                                                            
                                                    </div>
                                                </div>
                                                <button type="submit" class="btn_1 rounded full-width" >SIGN IN</button>
                                                <div class="text-center add_top_10">
                                                        Resend verification code
                                                </div>
                                                            
                                            </form>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
        }
}
