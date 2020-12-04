import React from 'react'
import '../CSS/login.css'
import Landing from '../IMAGES/landing.svg'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

export default function Resetpwd()
 {
    const history = useHistory()
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
				
                .required("Required!")
                .min(6, "Password must be at least 6 charecters"),
                confirm_password: Yup.string()
		
			 
              .required("Required!")
              .oneOf([Yup.ref("password")], "Password's not match")
			
        }),
          onSubmit: (values,onSubmitprops) => 
          {   
                axios.post("", values).then(res =>
                {
                    
                    onSubmitprops.resetForm() 
                    history.push('/login')
                        
                })
                .catch(errors =>
                {
                    console.log(errors);
                }) 
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
