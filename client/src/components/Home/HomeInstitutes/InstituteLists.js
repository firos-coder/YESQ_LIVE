import React, {  useState } from 'react'
import InstituteList from './InstituteList/instituteList'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import { useEffect } from "react";

export default function InstituteLists() {
    const [institute, setInstitute] = useState([])
    const History = useHistory();
    useEffect(() => {
        axios.post('/institute/listing').then(response=>{
            setInstitute(response.data)
           console.log(response.data)
       
        });
    } ,[]);
    const tokenBookHandler=(item)=>{
        History.push
                    ({
                        pathname: '/institute/home',
                        state:
                        {
                            item:item
                        }
                    })

    }
    
    
       
        return (
            <div class="col-lg-10">
                <div class="row mt-50">
                
                    {institute.map((item,key)=>{
                    return(
                    <InstituteList 
                    name={item.DISPLAYNAME}
                    location={item.DISTRICT}
                    website={item.WEBSITE}
                    mobile={item.MOBILE}
                    clicked={()=>tokenBookHandler(item)}/>
                    )
               
                 })}
                </div>
            </div>

           

                
          
           
           
        )
    
        
}


// export default class InstituteLists extends Component {
    
//     constructor(props){
//         super(props)
//         this.state={
//             institute : []
//         }
       

//     }
//     componentDidMount(){
//         axios.post('/institute/listing').then(response=>{
//             this.setState({institute:response.data})
//            console.log(response.data)
//         });
//     }
//     tokenBookHandler=()=>{
//         history.push('/institute/home')

//     }
//     render() {
        
//         return (
//             <div class="col-lg-10">
//                 <div class="row mt-50">
                
//                     {this.state.institute.map((item,key)=>{
//                     return(
//                     <InstituteList 
//                     name={item.DISPLAYNAME}
//                     location={item.DISTRICT}
//                     website={item.WEBSITE}
//                     mobile={item.MOBILE}
//                     clicked={this.tokenBookHandler}/>
//                     )
               
//                  })}
//                 </div>
//             </div>

           

                
          
           
           
//         )
//     }
// }


