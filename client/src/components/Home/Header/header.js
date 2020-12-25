import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../IMAGES/logo_sticky.svg'
import SearchIcon from '../../../IMAGES/ICONS/search.svg'
import TokenIcon from '../../../IMAGES/ICONS/token.svg'
import UserIcon from '../../../IMAGES/ICONS/user.svg'
import Token from '../../../IMAGES/token.svg'
import '../Css/home.css'

 
export default class Header extends Component {
	render(){
			return (
		
				<div>
					<div id="page" className="theia-exception">
						<header className="header_in"> 
							<div className="container-fluid">
								<div className="row">
									<div className="col-lg-2 col-12">
											<Link to="#menu" className="btn_mobile">
											<div className="hamburger hamburger--spin" id="hamburger">
												<div className="hamburger-box">
													<div className="hamburger-inner"></div>
												</div>
											</div></Link>
											
											<div id="logo">
												<Link to="index.html">
													<img src={Logo}  alt="logo" className="logo_sticky" style={{width: 165,height: 35}} alt='logos'/>
												</Link>
											</div>
											<Link to="#0" className="side_panel btn_search_mobile"><img src={SearchIcon} alt='searchIcon'/></Link>
											<Link to="#" className="btn_search_mobile"><img src={TokenIcon} alt='tokenIcon' /></Link>
											<Link to="login.html" class="btn_search_mobile"><img src={UserIcon} alt='userIcon'/></Link>
									</div>
									<div className="col-lg-7 col-12">
										<div id="results">
											<div className="row no-gutters custom-search-input-2 inner">
												<div className="col-lg-4">
													<div className="form-group">
														<input className="form-control" type="text" placeholder="Location Search"/>
													</div>
												</div>
												<div class="col-lg-4">
													<div className="form-group">
														<input className="form-control" type="text" placeholder="Search Sectors"/>
													</div>
												</div>
												<div className="col-lg-1">
													<input type="submit" value="Search"/>
												</div>
												<div className="col-lg-3 text-center">
													<div className="token">
														<Link to=""><img src={Token} alt='token'/>Token</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-12">
										<ul id="top_menu">
											<li><Link to="/login">Sign In</Link></li>
											<li><Link to="/user/signup" class="btn_1">Sign Up</Link></li>
											<li><Link to="#" className="right-nav"><i class="fa fa-bars"></i></Link></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="layer"></div>
								<div id="search_mobile">
								<Link to="#" class="side_panel"><i className="icon_close"></i></Link>
									<div className="custom-search-input-2">
										<div className="form-group">
											<input className="form-control" type="text" placeholder="Location Search"/>
										</div>
										<div className="form-group">
											<input className="form-control" type="text" placeholder="Search Sectors"/>
										</div>
										<input type="submit" value="Serach"/>
									</div>
							</div>
				
						</header> 
						<header className="header_in">
							<div className="container-fluid">
								<div className="row">
									<div className="col-lg-3">
										<Link to='' className="location-bar"><i className="icon_pin_alt"></i>
											Select your location</Link>
									</div>
									<div className="col-lg-9 ">
										<nav id="menu" class="main-menu">
											<ul>
												<li><span><Link to=''>Help</Link></span></li>
												<li><span><Link to=''>Banks</Link></span></li>
												<li><span><Link to=''>Hospitals</Link></span></li>
												<li><span><Link to=''>Govt : Institutions</Link></span></li>
												<li><span><Link to=''>Civil Supply</Link></span></li>
												<li><span><Link to=''>Internet Cafe</Link></span></li>
												<li><span><Link to=''>Akshaya</Link></span></li>
											</ul>
		
										</nav>
									</div>
								</div>
							</div>
						</header>
					</div>
              	
				</div>
			)

		}	
   
}
