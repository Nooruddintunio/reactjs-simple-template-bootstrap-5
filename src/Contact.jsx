import { onSnapshot, collection } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import db from "./firebase";




const  Contact = () =>{
   
    export default function contacts(){
        useEffect( () => {
            onSnapshot(collection(db, "testingdata"), (snapshot) => {
                console.log(snapshot);
            } );
        })
    }   

    const [user, setUser] = useState({
        name: "",
        email: "",
        message: "",
    });

    const getUserData = () => {
    }


    return (
        <>
    <div className='container'>
        <div className='row'>
            <div className='my-5'>
                <h1 className='tab-center'>Contact Us</h1>
            </div>
        </div>
        </div>
        <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gy-3'>
                        <div className="mb-3">
  <label className="form-label">Name</label>
    <input type="email" className="form-control"  placeholder="Name" 
        value={user.name}
        onChange={getUserData} />
    </div>
                        <div className="mb-3">
  <label className="form-label">Email</label>
    <input type="email" className="form-control" placeholder="name@example.com" 
        value={user.email}
        onChange={getUserData} />
    </div>
<div className="mb-3">
  <label className="form-label">Message</label>
  <textarea className="form-control" rows="3" 
        value={user.message}
        onChange={getUserData} ></textarea>
</div>
<div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3">Submit Now</button>
  </div>

                        </div>

                    </div>
                </div>
        </div>
        </>
    );
}

export default Contact;