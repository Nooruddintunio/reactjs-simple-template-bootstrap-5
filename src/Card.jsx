import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/img2.jpg';

const headings = {
    textTransform : 'capitalize',
    borderBottom : '1px solid #000',
   
}
const  Card = () =>{
    return (
        <>
           <div className='col-md-4 col-10 max-auto'>
                <div className="card ">
                    <img src={web} className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title headings" style={headings}>Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
                 </div>
                </div>
            </div>
        </>
    );
}

export default Card;