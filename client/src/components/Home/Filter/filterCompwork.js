import React from 'react'
import '../Css/home.css'
import '../Css/font-awesome.css'


export default function FilterCompwork() {
    return (
        <div>
            <div className="filter_type">
                <h6>Working Time</h6>
                    <ul>
                        <li>
                            <label className="container_check">24 Hrs 
                                <input type="checkbox"/>
                                    <span className="checkmark"></span>
                            </label>
                        </li>
                        <li>
                            <label className="container_check">12 Hrs 
                                <input type="checkbox"/>
                                    <span className="checkmark"></span>
                            </label>
                        </li>
                                        
                    </ul>
                                    
            </div>
            
        </div>
    )
}
