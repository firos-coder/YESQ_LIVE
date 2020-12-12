import React from 'react'
import '../InstituteCss/regstep1.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function Regstep3() {
    const location = useLocation()
    useEffect(() => {
                
            }, [location]);
    const History = useHistory()
   
    const formik = useFormik
        ({
            initialValues:
            {
                phone: "",
                email: "",
                mobile: "",
                Youtube: "",
                facebook: "",
                website: "",
                instagram: "",
                twitter: ""
            },
            validationSchema: Yup.object
                ({  
                   
                }),
            onSubmit: (values,onSubmitprops) => {
                let phoneTrim = values.phone
                let emailTrim = values.email.trim()
                let websiteTrim = values.website.trim()
                let YoutubeTrim = values.Youtube.trim()
                let instagramTrim = values.instagram.trim()
                let facebookTrim = values.facebook.trim()
                let twitterTrim = values.twitter.trim()
                const trimValues = { phone:phoneTrim,email:emailTrim,website:websiteTrim,Youtube:YoutubeTrim,
                    facebook: facebookTrim,instagram:instagramTrim,twitter:twitterTrim
                                   }
                const finalValues = {
                    step1: location.state.values,
                    step2: location.state.values2,
                    step3: trimValues
                         }
                axios.post("/institute/registration", finalValues).then(response => {
                    
                    onSubmitprops.resetForm()
                     History.push
                         ({
                            pathname: '/instistute/verification',
                             state: { }
                         });
                })
                     .catch((err) => {
                        

                     })
            }
        });
    return (
        <div className="container">
            <div className=" form-align ">
                <form className="signInForm"  autoComplete="off" onSubmit={formik.handleSubmit}> 
                    <div className="row  form-pad">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="" className="input-label">Phone</label>
                                <input
                                    type="number"
                                    className="form-control signInMobile"
                                    name="phone"
                                    id="phone"
                                    {...formik.getFieldProps('phone')}
                                />
                            </div>
                           <div className="form-group">
                                <label htmlFor="" className="input-label">Whatsapp</label>
                                <input
                                    type="text"
                                    className="form-control signInPassword"
                                    name="whatsapp"
                                    id="whatsapp"
                                    {...formik.getFieldProps('email')}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="input-label">Website</label>
                                <input
                                    type="text"
                                    className="form-control signInPassword"
                                    name="website"
                                    id="website"
                                    {...formik.getFieldProps('website')}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="input-label">Youtube</label>
                                <input
                                    type="text"
                                    className="form-control signInPassword"
                                    name="Youtube"
                                    id="Youtube"
                                    {...formik.getFieldProps('Youtube')}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="" className="input-label">Facebook</label>
                                <input
                                    type="text"
                                    className="form-control signInPassword"
                                    name="facebook"
                                    id="facebook"
                                    {...formik.getFieldProps('facebook')}
                                 />
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="input-label">Instagram</label>
                                <input
                                     type="text"
                                     className="form-control signInPassword"
                                     name="instagram"
                                     id="instagram"
                                     {...formik.getFieldProps('instagram')}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="input-label">Twitter</label>
                                <input
                                    type="text"
                                    className="form-control signInPassword"
                                    name="twitter"
                                    id="twitter"
                                    {...formik.getFieldProps('twitter')}
                                />
                            </div>
                            <button type="submit" className="btn_1 rounded full-width  submit-btn pad-60">Submit</button>
                        </div>
                        
                    </div>
                                    
                </form>
            </div>
        </div>

           
            
            
       
    )
}
