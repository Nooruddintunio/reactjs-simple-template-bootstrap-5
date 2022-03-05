import React from 'react';
import Card from './Card';


const  Services = () =>{
    return (
        <>
        <div className='container'>
        <div className='row'>
            <div className='my-5'>
                <h1 className='tab-center'>Our Services</h1>
            </div>
        </div>
        </div>
        <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gy-3'>
                           <Card />
                           <Card />
                           <Card />
                           <Card />
                           <Card />
                           <Card />
                        </div>

                    </div>
                </div>
        </div>

        </>
    );
}

export default Services;