import React from 'react'
import '../InstituteCss/regstep1.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
export default function Regstep2() {
    const History = useHistory()
   
    const formik = useFormik
        ({
            initialValues:
            {
                roomno: "",
                building: "",
                street: "",
                city: "",
                area: "",
                pincode: "",
                designation: "",
                district: "",
                state: "",
                country: "",
                landmark: ""
            },
            validationSchema: Yup.object
                ({  
                    roomno: Yup.string()
                       .required("Enter your room number"),
                    building: Yup.string()
                        .required("Enter your building"),    
                    street: Yup.string()
                        
                        .required("Enter your street"),
                    landmark: Yup.string()
                        
                        .required("Enter your landmark"),
                    area: Yup.string()
                       .required("Enter your area"),
                      
                     city: Yup.string()
                        .required("Enter your city"),
                    pincode: Yup.string()
                        .required("Enter pincode"),
                    district: Yup.string()
                        .required("Enter your district"),
                    state: Yup.string()
                        .required("Enter your state"),
                    country: Yup.string()
                        .required("Enter your country"),
                }),
            onSubmit: (values,onSubmitprops) => {
                let roomnoTrim = values.roomno.trim()
                let buildingTrim = values.building.trim()
                let streetTrim = values.street.trim()
                let landmarkTrim = values.landmark.trim()
                let areaTrim = values.area.trim()
                let cityTrim = values.city.trim()
                let districtTrim = values.district.trim()
                let stateTrim = values. state.trim()
                let pincode= values.pincode
                let countryTrim = values.country.trim()
                const trimValues = { roomno: roomnoTrim,building:buildingTrim,street:streetTrim,landmark:landmarkTrim,
                                    area: areaTrim,city:cityTrim,pincode:pincode,
                                    district:districtTrim, state:stateTrim,country:countryTrim}
                                    console.log(trimValues)
                 axios.post("", trimValues).then(response => {
                     
                    onSubmitprops.resetForm()
                    //  history.push
                    //      ({
                    //         pathname: '/',
                    //          state: { }
                    //      });
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
                                <label htmlFor="" className="input-label">Room No</label>
                                <input
                                    type="text"
                                    className="form-control signInMobile"
                                    name="roomno"
                                    id="institute_name"
                                    {...formik.getFieldProps('roomno')}
                                />
                                {formik.touched.roomno && formik.errors.roomno && (<div className="errorMessage">{formik.errors.roomno}</div>)}

                            </div>
                           
                            <div className="form-group">
                                <label htmlFor="" className="input-label">Building</label>
                                <input
                                    type="text"
                                    className="form-control signInPassword"
                                    name="building"
                                    id="building"
                                    {...formik.getFieldProps('building')}
                                />
                                {formik.touched.building && formik.errors.building&& (<div className="errorMessage">{formik.errors.building}</div>)}

                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="input-label">Street</label>
                                <input
                                    type="text"
                                    className="form-control signInPassword"
                                    name="street"
                                    id="street"
                                    {...formik.getFieldProps('street')}
                                />
                                {formik.touched.street && formik.errors.street && (<div className="errorMessage">{formik.errors.street}</div>)}

                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="input-label">Landmark</label>
                                <input
                                    type="text"
                                    className="form-control signInPassword"
                                    name="landmark"
                                    id="email"
                                    {...formik.getFieldProps('landmark')}
                                />
                                {formik.touched.landmark && formik.errors.landmark && (<div className="errorMessage">{formik.errors.landmark}</div>)}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="" className="input-label">Area</label>
                                <input
                                    type="text"
                                    className="form-control signInPassword"
                                    name="area"
                                    id="area"
                                    {...formik.getFieldProps('area')}
                                 />
                                 {formik.touched.area && formik.errors.area&& (<div className="errorMessage">{formik.errors.area}</div>)}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="" className="input-label">City</label>
                                <input
                                     type="text"
                                     className="form-control signInPassword"
                                     name="city"
                                     id="contact_person"
                                     {...formik.getFieldProps('city')}
                                />
                                {formik.touched.city && formik.errors.city && (<div className="errorMessage">{formik.errors.city}</div>)}

                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="input-label">Pin Code</label>
                                <input
                                    type="number"
                                    className="form-control signInPassword"
                                    name="pincode"
                                    id="pincode"
                                    {...formik.getFieldProps('pincode')}
                                />
                                {formik.touched.pincode && formik.errors.pincode && (<div className="errorMessage">{formik.errors.pincode}</div>)}

                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="input-label">District</label>
                                    <input
                                        type="text"
                                        className="form-control signInPassword"
                                        name="district"
                                        id="district"
                                        {...formik.getFieldProps('district')}
                                    />
                                    {formik.touched.district && formik.errors.district && (<div className="errorMessage">{formik.errors.district}</div>)}

                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="input-label">State</label>
                                <input
                                    type="text"
                                    className="form-control signInPassword"
                                    name="state"
                                    id="state"
                                    {...formik.getFieldProps('state')}
                                />
                                {formik.touched.state && formik.errors.state && (<div className="errorMessage">{formik.errors.state}</div>)}

                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="input-label">Country</label>
                                    <input
                                        type="text"
                                        className="form-control signInPassword"
                                        name="country"
                                        id="country"
                                        {...formik.getFieldProps('country')}
                                    />
                                    {formik.touched.country && formik.errors.country && (<div className="errorMessage">{formik.errors.country}</div>)}

                            </div>
                                    
                        </div>
                        <button type="submit" className="btn_1 rounded full-width submit">Continue</button>
                                   
                    </div>
                                    
                </form>
            </div>
        </div>

           
            
            
       
    )
}
