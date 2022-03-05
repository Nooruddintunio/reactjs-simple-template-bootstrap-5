import React from 'react';
import web from "../src/images/download.jpg";
import { NavLink } from "react-router-dom";
import Common from './Common';

const  Home = () =>{
    return (
        <>
        <Common 
            name="Grow your Business with" 
            imgsrc={web} 
            visit='/services' 
            btname="Get Started" /> 
        </>
    );
}

export default Home;