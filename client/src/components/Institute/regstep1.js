import React from 'react'
import '../InstituteCss/regstep1.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
export default function Regstep1() {
    const History = useHistory()
    const phoneRegex = RegExp(
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    );
    const formik = useFormik
        ({
            initialValues:
            {
                institute_name: "",
                display_name: "",
                mobile: "",
                email: "",
                password: "",
                contact_person: "",
                designation: "",
                contact_number: ""
            },
            validationSchema: Yup.object
                ({  
                    institute_name: Yup.string()
                       .required("Enter institute name"),
                    display_name: Yup.string()
                        .required("Enter display name"),    
                    mobile: Yup.string()
                        .matches(phoneRegex, "Incorrect mobile number")
                        .required("Enter your mobile number"),
                    email: Yup.string()
                        .email("Enter valid email!")
                        .required("Enter valid email!"),
                    contact_person: Yup.string()
                       .required("Enter contact person"),
                    designation: Yup.string()
                       .required("Enter designation"),
                    password: Yup.string()
                        .required("Enter your password!"),
                    contact_number: Yup.string()
                        .matches(phoneRegex, "Incorrect mobile number")
                        .required("Enter your contact number"),
                }),
            onSubmit: (values,onSubmitprops) => {
                let institute_nameTrim = values.institute_name.trim()
                let display_nameTrim = values.display_name.trim()
                let mobileTrim = values.mobile
                let emailTrim = values.email.trim()
                let contact_personTrim = values.contact_person.trim()
                let designationTrim = values.designation.trim()
                let passwordTrim = values.password.trim()
                let contact_numberTrim = values.contact_number
                const trimValues = { institute_name:institute_nameTrim,display_name:display_nameTrim,mobile:mobileTrim,email:emailTrim,
                                    contact_person: contact_personTrim,designation:designationTrim,password:passwordTrim,
                                    contact_number:contact_numberTrim}
                         console.log(trimValues)
                    
                    onSubmitprops.resetForm()
                     History.push
                         ({
                            pathname: '/institute/registration2',
                             state: {
                                 values : trimValues
                              }
                         });
            }
        });
    return (
        <div className="container">
            <div className=" form-align ">
                <form className="signInForm"  autoComplete="off" onSubmit={formik.handleSubmit}> 
                    <div className="row  form-pad">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="" className="input-label">Name of Institute</label>
                                <input
                                    type="text"
                                    className="form-control signInMobile"
                                    name="institute_name"
                                    id="institute_name"
                                   {...formik.getFieldProps('institute_name')}
                                />
                                {formik.touched.institute_name && formik.errors.institute_name && (<div className="errorMessage">{formik.errors.institute_name}</div>)}

                            </div>
                           
                            <div className="form-group">
                                <label htmlFor="" className="input-label">Display Name</label>
                                <input
                                    type="text"
                                    className="form-control signInPassword"
                                    name="display_name"
                                    id="display_name"
                                    {...formik.getFieldProps('display_name')}
                                />
                                {formik.touched.display_name && formik.errors.display_name&& (<div className="errorMessage">{formik.errors.display_name}</div>)}

                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="input-label">Mobile Number</label>
                                <input
                                    type="number"
                                    className="form-control signInPassword"
                                    name="mobile"
                                    id="mobile"
                                    {...formik.getFieldProps('mobile')}
                                />
                                {formik.touched.mobile && formik.errors.mobile && (<div className="errorMessage">{formik.errors.mobile}</div>)}

                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="input-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control signInPassword"
                                    name="email"
                                    id="email"
                                    {...formik.getFieldProps('email')}
                                />
                                {formik.touched.email && formik.errors.email && (<div className="errorMessage">{formik.errors.email}</div>)}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="" className="input-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control signInPassword"
                                    name="password"
                                    id="password"
                                    {...formik.getFieldProps('password')}
                                 />
                                 {formik.touched.password && formik.errors.password && (<div className="errorMessage">{formik.errors.password}</div>)}
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="input-label">Contact Person</label>
                                <input
                                     type="text"
                                     className="form-control signInPassword"
                                     name="contact_person"
                                     id="contact_person"
                                     {...formik.getFieldProps('contact_person')}
                                />
                                {formik.touched.contact_person && formik.errors.contact_person && (<div className="errorMessage">{formik.errors.contact_person}</div>)}

                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="input-label">Designation</label>
                                <input
                                    type="text"
                                    className="form-control signInPassword"
                                    name="designation"
                                    id="designation"
                                    {...formik.getFieldProps('designation')}
                                />
                                {formik.touched.designation && formik.errors.designation&& (<div className="errorMessage">{formik.errors.designation}</div>)}

                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="input-label">Contact Number</label>
                                    <input
                                        type="number"
                                        className="form-control signInPassword"
                                        name="contact_number"
                                        id="contact_number"
                                        {...formik.getFieldProps('contact_number')}
                                    />
                                    {formik.touched.contact_number && formik.errors.contact_number && (<div className="errorMessage">{formik.errors.contact_number}</div>)}

                            </div>
                                    
                        </div>
                        <button type="submit" className="btn_1 rounded full-width submit">Continue</button>
                                   
                    </div>
                                    
                </form>
            </div>
        </div>

           
            
            
       
    )
}
