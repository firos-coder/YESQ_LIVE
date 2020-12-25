import React from 'react'
import '../Css/home.css'
import '../Css/font-awesome.css'


export default function Filtercompcatg() {
    return (
        <div>
            <div className="filter_type">
                <h6>Categories</h6>
                    <ul>
                        <li>
                            <label className="container_check">Banks 
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>
                        <li>
                            <label className="container_check">Hospitals 
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>
                         <li>
                            <label className="container_check">Govt:Inst 
                                <input type="checkbox"/>
                                    <span className="checkmark"></span>
                            </label>
                        </li>
                        <li>
                            <label className="container_check">Internet Help 
                                <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                        </li>
                        <li>
                            <label className="container_check">Others 
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>
                    </ul>
            </div>
                                    
                                   
                                   
            
        </div>
    )
}
