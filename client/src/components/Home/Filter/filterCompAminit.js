import React from 'react'
import '../Css/home.css'


export default function FilterCompAminit() {
    return (
        <div>
             <div className="filter_type">
                <h6>Aminities</h6>
                    <ul>
                        <li>
                            <label className="container_check">Parking 
                                 <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                         </li>
                        <li>
                             <label className="container_check">AC 
                                <input type="checkbox"/>
                                    <span className="checkmark"></span>
                            </label>
                        </li>
                        <li>
                             <label className="container_check">Wifi 
                                 <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                        </li>
                                        
                    </ul>
            </div>
            
        </div>
    )
}
