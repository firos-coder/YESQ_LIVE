import React,{Fragment} from 'react'
import '../Css/home.css'
import Bank from '../../../IMAGES/ICONS/bank.svg'
import Hospital from '../../../IMAGES/ICONS/hospital.svg'
import Govt from '../../../IMAGES/ICONS/govt.svg'
import Civil from '../../../IMAGES/ICONS/civil.svg'
import Internet from '../../../IMAGES/ICONS/internet.svg'
import Others from '../../../IMAGES/ICONS/others.svg'
import { Link } from 'react-router-dom'

export default function InstituteLayout() {
    return (
        <Fragment>
            <div className="col-lg-10">
				<div className="row mt-50">
                     <div className="col-lg-3 col-md-6">
                             <div className="box_topic" href="#0">
                                <div className="feature-icon text-center">
                                    <img src={Bank} alt='bank'/>
                                </div>
                                    <h3>Banks</h3>
                                    <p><Link to="#">Co-Operative</Link></p>
                                    <p><Link to="#">Nationalized</Link></p>
                                    <p><Link to="#">Finance</Link></p>
                                    <p><Link to="#">Others</Link></p>
                            </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="box_topic" href="#0">
                            <div className="feature-icon text-center">
                                <img src={Hospital} alt='hospital'/>
                            </div>
                                    <h3>Hospital</h3>
                                    <p><Link to="#">Govt : Hospital</Link></p>
                                    <p><Link to="#">Govt : Health center</Link></p>
                                    <p><Link to="#">Private Hospital</Link></p>
                                    <p><Link to="#">Others</Link></p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="box_topic" href="#0">
                            <div className="feature-icon text-center">
                                <img src={Govt} alt='govt'/>
                            </div>
                                <h3>Govt:Inst</h3>
                                <p><Link to="#">Village Office</Link></p>
                                <p><Link to="#">Panchayath</Link></p>
                                <p><Link to="#">Corporation</Link></p>
                                <p><Link to="#">Others</Link></p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="box_topic" href="#0">
                            <div className="feature-icon text-center">
                                <img src={Civil} alt='civil'/>
                            </div>
                                <h3>Civil Supply</h3>
                                <p><Link to="#">Ration Shop</Link></p>
                                <p><Link to="#">Supplyco</Link></p>
                                <p><Link to="#">CV 3</Link></p>
                                <p><Link to="#">Others</Link></p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="box_topic" href="#0">
                            <div className="feature-icon text-center">
                                <img src={ Internet} alt='internet'/>
                            </div>
                                <h3>Internet Help</h3>
                                <p><Link to="#">Akshaya</Link></p>
                                <p><Link to="#">Janaseva</Link></p>
                                <p><Link to="#">Internet Cafe</Link></p>
                                <p><Link to="#">Others</Link></p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="box_topic" href="#0">
                            <div className="feature-icon text-center">
                                <img src={ Others} alt='others'/>
                            </div>
                                <h3>Others</h3>
                                <p><Link to="#">Tourism Sectors</Link></p>
                                <p><Link to="#">Shopping</Link></p>
                                <p><Link to="#">Work Shop</Link></p>
                                <p><Link to="#">Others</Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
            
    		
            
     
    )
}
