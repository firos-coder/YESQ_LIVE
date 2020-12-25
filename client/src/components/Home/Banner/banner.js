import React, { Component } from 'react'
import Banner from '../../../IMAGES/banner.jpg'
import '../Css/home.css'


export default class banner extends Component {
    render() {
        return (
            <div className="container-fluid margin_60_35">
                <div className="row">
                    <img src={Banner} className="img-fluid" width="100%" alt='banner'/>
                </div>
                
            </div>
        )
    }
}
