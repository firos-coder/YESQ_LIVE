import React, { Component,Fragment } from 'react'
import InstituteList from './InstituteList/instituteList'
import axios from 'axios'

export default class InstituteLists extends Component {
    constructor(props){
        super(props)
        this.state={
            institute : []
        }

    }
    componentDidMount(){
        axios.post('/institute/listing').then(response=>{
            this.setState({institute:response.data})
           console.log(response.data)
        });
    }
    render() {
        
        return (
            <div class="col-lg-10">
                <div class="row mt-50">
                
                    {this.state.institute.map((item,key)=>{
                    return(
                    <InstituteList 
                    name={item.DISPLAYNAME}
                    location={item.DISTRICT}
                    website={item.WEBSITE}
                    mobile={item.MOBILE}/>
                    )
               
                 })}
                </div>
            </div>

           

                
          
           
           
        )
    }
}


