import React, { Component } from 'react'
import '../Css/home.css'
import InstituteLayout from '../HomeInstitutes/instituteLayout'

export default class filter extends Component {
    render() {
        return (
            <div className="container-fluid margin_60_35">
                <div className="row">
				    <aside className="col-lg-2 p-0" id="sidebar">
                        <div className="location-search">
                            <a href="">
                            Please select your location for better experience
                            </a>
                        </div>
                        <div id="filters_col">
                                    <a data-toggle="collapse" href="#collapseFilters" aria-expanded="false" aria-controls="collapseFilters"          id="filters_col_bt">Filters </a>
                                <div className="collapse show" id="collapseFilters">
                        
                                        {this.props.children}
                                    
                                        
                                    
                                </div>
                            
                        </div>
					
				    </aside>
                    <InstituteLayout/>
				</div>
                
            </div>
        )
    }
}
