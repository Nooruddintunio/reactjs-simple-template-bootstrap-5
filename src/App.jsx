import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes} from "react-router-dom";
import './index.css'
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navebar from './Navebar';

const  App = () =>{
    return (
        <>
        <Navebar />
        <Routes>
            <Route exact path="/" element={<Home />}> </Route>
            <Route exact path="/about" element={<About/>} > </Route>
            <Route exact path="/services" element={<Services/>} > </Route>
            <Route exact path="/contact" element={<Contact/>}> </Route>  
        </Routes>
        </>
    );
}

export default App;