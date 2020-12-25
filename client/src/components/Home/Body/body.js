import React, { Component } from 'react'
import '../Css/home.css'

export default class Body extends Component {
    render() {
        return (
            <div className="container-fluid margin_60_35">
                <div className="row">
				    {this.props.children}
				</div>
                
            </div>
        )
    }
}
