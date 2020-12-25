import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/userexist.css'
import Landing from '../IMAGES/landing.svg'


export default function Notfound() {
    const style = {marginBottom : '0px'}
    return (
        <div className='white'>
            <div className="container">
		        <div className="row d-flex align-items-center vh-100">
                    <div className="col-md-6 card-new">
                        <div className="card1 pb-5">
                            <div className="row px-3  mt-4 mb-5 border-line"> 
                                <img src={Landing}  alt='logo'/>
                            </div>
                        </div>

                    </div>
			        <div className="col-md-5 m-auto">
				        <div id="login">
					        <aside>
                                <div className="notfound-caption">
                                <h2><span className="notfound-caption">404</span><br/>
                               <span className="sorry-caption">Sorry!</span></h2>
                                </div>
                                <div className="notfound-subcaption">
                                <p>The page you're looking for not found</p>
                                </div>
                                <di className="footer-gohome">
                                    <p><Link className='link-color' to='/'>Go to Home <span className="arrow">{'>>'}</span></Link></p>
                                </di>
                                

                            </aside>
                       </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
