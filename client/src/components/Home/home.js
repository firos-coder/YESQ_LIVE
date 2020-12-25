import React, { Component } from 'react'
import Header from './Header/header'
import Banner from './Banner/banner'
import Filter from './Filter/filter'
import FilterCompcatg from './Filter/filterCompCatog'
import FilterCompwork from './Filter/filterCompwork'
import FilterCompAminit from './Filter/filterCompAminit'
import FilterCompPaymnt from './Filter/filterCompPaymnt'
import Footer from './Footer/footer'



export default class Home extends Component {
	render() {
		return (
			<div>
				
				<Header/>
				<Banner/>
				<Filter>
					<FilterCompcatg/>
					<FilterCompwork/>
					<FilterCompAminit/>
					<FilterCompPaymnt/>

				</Filter>
				<Footer/>
			</div>
		)
	}
}
