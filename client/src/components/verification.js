import React, {useState} from 'react';
import OtpInput from 'react-otp-input';
import '../CSS/verification.css'
import Landing from '../IMAGES/landing.svg'
import axios from 'axios'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function App()
 {
    const[otp,setOtp] = useState('')
    const[error,setError] = useState('')
    const location = useLocation();
            useEffect(() => {
                console.log(location.pathname); // result: '/secondpage'
               
                console.log(location.state.detail); // result: 'some_value'
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
                const inputs = {
                    code:value,
                    mobile:location.state.detail
                }
                setOtp('')
                 axios.post("/verification",inputs).then(response=>{
                    
                    
                   
                     
                  }).catch((err) => {
                     
                 })
            }
            else
            {
                console.log("enter valid otp")
                setError('Enter valid OTP')
            }
      
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
                                            <div className="text-center add_top_10 font-12 verifictn-subhead">Please type the verification code<br/>
                                                send to {'...'+location.state.detail.slice(-4)}
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
                                                                separator={<span>  </span>}
                                                                isInputNum="true"
                                                                inputStyle="code-box"
                                                                containerStyle="otp-box"
                                                            />
                                                            
                                                            
                                                    </div>
                                                </div>
                                                <button type="submit" class="btn_1 rounded full-width" >VERIFY</button>
                                                <div class="text-center add_top_10">
                                                        <button> Resend verification code</button>
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
