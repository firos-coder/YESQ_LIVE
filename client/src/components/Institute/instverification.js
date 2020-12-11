import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import '../InstituteCss/instverification.css'
import axios from 'axios'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom'

export default function Instverification() {
    const [otp, setOtp] = useState('')
    const location = useLocation();
    const History = useHistory()
    const resendInput =
    {
        
    }
    useEffect(() => {

    }, [location]);
   
    const handleChange = otp => {
        setOtp(otp)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const value = otp
        const valueLength = value.length
        if (valueLength === 6) {
            const inputs =
            {
               
            }
            setOtp('')
            axios.post("", inputs).then(response => {

                History.push
                    ({
                        pathname: '',
                        state:
                        {
                            
                        }
                    })


            }).catch((err) => {
                
            })
        }
        else {
            // console.log("enter valid otp")
            
        }

    }
    const resendOtp = () => {
        axios.post("", resendInput).then(response => {
            History.push
                ({
                    pathname: '',
                    state:
                    {
                        
                    }
                })
        }).catch((err) => {
            
        })

    }

    return (
            <div className="container">
                <div className="pad-100">
                    <div className="row box-pad align-center ">
                        <div className="col-md-6 form-pad">
                        <div className="text-center main-head">
                                     <h3>Verification</h3>
                            </div>
                                 <div className="text-center add_top_10 font-12 verifictn-subhead">Please Enter the verification code<br />
                                                 send to 
                                    
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

                        </div>
                    </div>
                </div>
            </div>
        
    );

}
