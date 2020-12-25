import React from 'react'
import '../Css/home.css'
import '../Css/font-awesome.css'


export default function FilterCompPaymnt() {
    return (
        <div>
             <div className="filter_type">
                    <h6>Payment</h6>
                        <ul>
                            <li>
                                <label className="container_check">Card 
                                    <input type="checkbox"/>
                                        <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_check">Mobile Banking 
                                    <input type="checkbox"/>
                                        <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_check">Cash 
                                    <input type="checkbox"/>
                                        <span className="checkmark"></span>
                                </label>
                            </li>
                                        
                        </ul>
                </div>
            
        </div>
    )
}
