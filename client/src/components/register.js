import React,{useState}  from 'react'
import '../CSS/register.css'
import Landing from '../IMAGES/landing.svg'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Link } from "react-router-dom"
import {useHistory} from 'react-router-dom'


export default function Register() 
{
	const [error, setError] = useState(null)
    const errordiv = error ? <div className="login-errormsg">{error}</div> : '';
	const History = useHistory()
	const phoneRegex = RegExp(
		/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
	  );
	const formik = useFormik
	({
		initialValues:
		 {
			name: "",
			mobile:"",
			password: "",
			confirm_password: ""
			
		},
		 
		validationSchema: Yup.object
		({		
			 	name: Yup.string()
				
					.required("Enter your name"),
				mobile: Yup.string()
				    .matches(phoneRegex, "Invalid Mobile Number")
				    // .min(10, "Mobile number must be 10 digits")
					// .max(10, "Mobile number must be 10 digits")
					.required("Enter your mobile number"),
				password: Yup.string()
					.min(6, "Password must be at least 6 charecters")
					.required("Enter your password"),
				confirm_password: Yup.string()
					.oneOf([Yup.ref("password")], "Password's not match")
				    .required("Re-enter your password")
			}),
			
			onSubmit: (values,onSubmitprops) => 
			{		let nameTrim = values.name.trim()
					let mobileTrim = values.mobile
					let passwordTrim = values.password.trim()
					let confirm_passwordTrim = values.confirm_password.trim()
					const inputs = { name: nameTrim, mobile: mobileTrim, password: passwordTrim, confirm_password: confirm_passwordTrim }
				
					 axios.post("/verifyregister",inputs).then(response=>
                {
				  
						
					 onSubmitprops.resetForm()
                    History.push
                    ({
						pathname: '/regverification',
						state: {
							uid: response.data.uid,
							name: response.data.name,
							mobile: response.data.mobile,
							password:response.data.password
							
						}
                        
                       
                    
					});
						 
						 
                })
                .catch((err) =>
                {
					setError(err.response.data);
                  
                })
			}
	});
	
	return(
		
        <div>
            <div className="container">
		        <div className="row d-flex align-items-center vh-100">
			        <div className="col-md-6 card-new">
						<div className=" pb-5">
                   			<div className="row px-3  mt-4 mb-5 "> 
                                <img src={Landing}  alt='logo'/> 
                            </div>
                        </div>
					</div>
			        <div className="col-md-5 m-auto">
			            <div id="login">
				            <aside>
				                <div className="text-center"> 
									<h3>Create Account</h3>
									{errordiv}
				                </div>
                                 <form onSubmit={formik.handleSubmit} autoComplete="off">
				
									<div className="form-group">
                						<label htmlFor="" className="input-label">Full Name</label>
										<input
										 type="name"
										 className="form-control"
										 name="name"
										 value={formik.values.name}
										 onChange={formik.handleChange}
										 onBlur={formik.handleBlur}
										// {.....formik.getFieldProps('name')}
										  id="name"/>
										   {formik.touched.name && formik.errors.name && (<div className="errorMessage">{formik.errors.name}</div>)} 
									</div>
									<div className="form-group">
                						<label htmlFor="" className="input-label">Mobile Number</label>
										<input  type='number'
												
												name="mobile" 
												id="mobile"
												
												value={formik.values.mobile}
												 onChange={formik.handleChange}
												 onBlur={formik.handleBlur}
												onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
												
												// {...formik.getFieldProps('mobile')}
										 		className="form-control"  />
												 {formik.touched.mobile && formik.errors.mobile && (<div className="errorMessage">{formik.errors.mobile}</div>)}
					
									</div>
									<div className="form-group">
                						<label htmlFor="" className="input-label">Password</label>
										<input type="password"
										 		name="password"
										  		id="password"
												  value={formik.values.password} 
												  onChange={formik.handleChange}
												  onBlur={formik.handleBlur}
												// {...formik.getFieldProps('password')}
										   		placeholder="Passwords must be at least 6 characters"
										   		className="form-control"/>
												   {formik.touched.password && formik.errors.password && (<div className="errorMessage">{formik.errors.password}</div>)}
									</div>
									<div className="clearfix add_bottom_15"></div>
									<div className="form-group">
                						<label htmlFor="" className="input-label">Confirm Password</label>
										<input type="password"
											name="confirm_password"
											 id="confirm_password"
											 value={formik.values.confirm_password}
											 onBlur={formik.handleBlur}
											 onChange={formik.handleChange}
											// {...formik.getFieldProps('confirm_password')}
											placeholder="Re-type password"
											className="form-control" 
											/>
											{formik.touched.confirm_password && formik.errors.confirm_password && (<div className="errorMessage">{formik.errors.confirm_password}</div>)}
											
									</div>
									<div className="clearfix add_bottom_15">
										<div className="text-center">
                         					<p id="forgot" className="font-12"> We will send you a verification code to your phone.</p> 
                            			</div>
									</div>
									 <button type="submit" className="btn_1 rounded full-width">CONTINUE</button>
									 <div className="text-center add_top_10"><p>Already have an account? <span className='login-link'><Link className='log-link-clr' to ='/Login'>Log In!</Link>  </span></p></div> 
								</form>
                            </aside>
	                    </div>
		            </div>
				</div>
	        </div>
        </div>
    )
}




