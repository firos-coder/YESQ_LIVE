import React,{useState} from 'react'
import '../CSS/login.css'
import Landing from '../IMAGES/landing.svg'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

export default function Resetpwd()
 {
    const formik = useFormik
    ({
        initialValues: 
        {
			password:"",
			confirm_password: ""
			
        },
        validationSchema: Yup.object
        ({
			password: Yup.string()
				
				.required("Required!"),
                confirm_password: Yup.string()
		
			 
			  .required("Required!")
			
        }),
          onSubmit: (values) => 
          {
              console.log(values)
          }
    });
    return (
        <div>
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
                                <div className="text-center">
                                    <h3>RESET PASSWORD</h3>
                                   
                                </div>

                                <form   className="signInForm"  onSubmit={formik.handleSubmit}  autoComplete="off">
                                    <div className="form-group">
                                        <label htmlFor="" className="input-label">New Password</label>
                                        <input 
                                        type="text" 
                                        className="form-control signInMobile" 
                                        name="password"
                                        id="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}/> 
                                        {formik.touched.password && formik.errors.password && (<div className="errorMessage">{formik.errors.password}</div>)}

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="" className="input-label">Confirm Password</label>
                                        <input
                                        type="password"
                                        className="form-control signInPassword"
                                        name="confirm_password" 
                                        id="password" 
                                        value={formik.values.confirm_password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}/>
                                        {formik.touched.confirm_password && formik.errors.confirm_password && (<div className="errorMessage">{formik.errors.confirm_password}</div>)}

                                    </div>
                                   
                                    <button type="submit" className="btn_1 rounded full-width marg-top-10">SUBMIT</button>
                                    
                                </form>
                            </aside>
				        </div>
			        </div>
		        </div>
	        </div>
        </div>
            
        </div>
    )
}
