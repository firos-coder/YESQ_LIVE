import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/userexist.css'
import Landing from '../IMAGES/landing.svg'


export default function userexist() {
    const style = {marginBottom : '0px'}
    return (
        <div className='white'>
            <div className="container">
		        <div className="row d-flex align-items-center vh-100">
                    <div className="col-md-6 card-new">
                        <div className="card1 pb-5">
                            <div className="row px-3  mt-4 mb-5 border-line"> 
                                <img src={Landing}  alt='logo'/>
                            </div>
                        </div>

                    </div>
			        <div className="col-md-5 m-auto">
				        <div id="login">
					        <aside>
                                <div className="text-center mob-use-caption">
                                    <p style={style}>This mobile number already in use!</p>
                                </div>
                                <div className="exist-custmr-caption">
                                    <p style={style}>Are you an existing customer?</p>
                                </div>
                                <div className="signin-frgtpswd">
                                    <ul>
                                        <li><Link to='/Login' className='signin-frgtpswd-link'>Sign-in</Link></li>
                                        <li><Link to='/Forgot' className='signin-frgtpswd-link'>Forgot your password</Link></li>
                                    </ul>
                                </div>
                                <div className="newto-yesq-caption">
                                    <p style={style}>New to YESQ?</p>
                                    <ul className='pad-10'>
                                        <li><Link to='/user/signup' className='signup-frgtpswd-link'>Create account with a different mobile number</Link></li>
                                        
                                    </ul>
                                </div>

                            </aside>
                       </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
