import React, {useState} from 'react';
import OtpInput from 'react-otp-input';
import '../CSS/verification.css'
import Landing from '../IMAGES/landing.svg'
import axios from 'axios'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import {useHistory} from 'react-router-dom'

export default function App()
 {
    const[otp,setOtp] = useState('')
    const[error,setError] = useState('')
    const location = useLocation();
    const History = useHistory()
    const resendInput =
    {
        mobile:location.state.mobile
    }
    const mobileToString =location.state.mobile.toString()
    useEffect(() => {
                
            }, [location]);
        
        
       const  handleChange = otp => 
        {
            setOtp(otp)
        }
     
        const  handleSubmit = (event) =>
        {
            event.preventDefault()
            const value = otp
            const valueLength = value.length
            if(valueLength === 6)
            {
                const inputs =
                 {
                    code:value,
                    uid: location.state.uid,
                    sendTo: location.state.mobile,
                    name: location.state.name,
                    mobile: location.state.mobile,
                    confirm_password:location.state.password
                }
                setOtp('')
                 axios.post("/register",inputs).then(response=>{
                    
                     History.push
                    ({
                        pathname: '/home',
                        state:
                        {
                            uid: response.data.uid
                        }
                    })
                   
                     
                  }).catch((err) =>
                   {
                     
                 setError(err.response.data);   
                   })
            }
            else
            {
                console.log("enter valid otp")
                setError('Enter valid OTP')
            }
      
    }
        const resendOtp=()=>
        {
            axios.post("/verifyregister", resendInput).then(response =>
                {
                    History.push
                    ({
                        pathname: '/regverification',
                        state:
                        {
                            mobile: response.data.mobile,
                            uid:response.data.uid
                        }
                    })
                }).catch((err) => {
                 setError(err.response.data);   
                })

        }

    
 
       
         
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
                                            <div className="text-center add_top_10 font-12 verifictn-subhead">Please Enter the verification code<br/>
                                                send to {'...' + mobileToString.slice(-4)}
                                                {error?<div className="otp-errormsg">{error}</div> : ''}
                                            </div>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <div className="code_group">
                                                        <div className="row code-box-marg"></div>
                                                            <OtpInput
                                                                                        
                                                                value={otp}
                                                                onChange={handleChange}
                                                                numInputs={6}
                                                                 separator={<span></span>}
                                                                isInputNum="true"
                                                                inputStyle="code-box"
                                                                containerStyle="otp-box"
                                                            />
                                                            
                                                            
                                                    </div>
                                                </div>
                                                <button type="submit" class="btn_1 rounded full-width" >CONTINUE</button>
                                                <div class="text-center add_top_10">
                                               
                                                </div>
                                                            
                                            </form>
                                            <button type='submit' className='resend-btn' onClick={resendOtp}> Resend verification code?</button>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
        
}
