import React, { Component } from 'react'
import Header from './Header/header'
import Banner from './Banner/banner'
import Filter from './Filter/filter'
import FilterCompcatg from './Filter/filterCompCatog'
import FilterCompwork from './Filter/filterCompwork'
import FilterCompAminit from './Filter/filterCompAminit'
import FilterCompPaymnt from './Filter/filterCompPaymnt'
import Footer from './Footer/footer'
import Body from './Body/body'
import InstituteLayout from './HomeInstitutes/instituteLayout'
import InstituteLists from './HomeInstitutes/InstituteLists'




export default class InstituteListing extends Component {
	render() {
		return (
			<div>
				
				<Header/>
				<Banner />
				<Body>
				<Filter>
					<FilterCompcatg/>
					<FilterCompwork/>
					<FilterCompAminit/>
					<FilterCompPaymnt/>

				</Filter>
				<InstituteLists />
				</Body>
				
					
					
				<Footer />
			</div>
		)
	}
}
