import React from 'react'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
    const location = useLocation();
    useEffect(() => {
        console.log(location.pathname); // result: '/secondpage'
         console.log(location.state.detail.password); 
        console.log(location.state.detail.mobile); // result: 'some_value'
    }, [location]);
    return (
        <div>
            <h3>{location.state.detail.password}</h3>
            
        </div>
    )
}