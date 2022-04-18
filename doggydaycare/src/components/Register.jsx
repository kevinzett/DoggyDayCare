import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dogRegister from '../doggyregister.json'; 
import React from 'react';
import './Register.css';
import { Link } from "react-router-dom";

const Register = ({setCurrentDog}, {setPresentStatus}) => {

    const params = useParams();
    
    let navigate = useNavigate();

    const goBack = () => {
        setTimeout(() => {
            navigate("/Register/")
        }, 1000);
    }


    const isPresent = dogRegister.map((dogInfo ,index) => {
      
        if (dogInfo.present) {
      
            return (
                console.log(dogInfo.src),
                
                <div className="divparentflexbox">
                    
                    <div className="status">
                        <Link to='/Changedstatus'>
                    <button className="buttonfordogstwo" onClick={() => setPresentStatus(dogInfo.present = false)}>At DoggyCare</button>
                        
                    </Link>
                    </div>
                    <div className="status">
                    <h1 className="namefordogs">{dogInfo.owner.name + " " + dogInfo.owner.lastName}</h1>
                        </div>          
                    <Link to='/info'>
                    <button className="buttonfordogs" onClick={(() => setCurrentDog(dogInfo))
                    }>Inspect</button>
                    </Link>
                </div>
             )
        } else {
            
            return (
            
             <div className="divparentflexbox">

                 <div className="status">
                 <Link to='/Changedstatus'>
                 <button className="buttonfordogsthree" onClick={() => {
                     setPresentStatus(dogInfo.present = true);
                    setCurrentDog(dogInfo);
                     }
                    }>At DoggyCare</button>
                 </Link>
                 </div>
                 <div className="status">
                 <h1 className="namefordogs">{dogInfo.owner.name + " " + dogInfo.owner.lastName}</h1>
                    </div>   
                           
                 <Link to='/info'>
                 <button className="buttonfordogs" onClick={() => setCurrentDog(dogInfo)}>Inspect</button>
                 </Link>
                 
             </div>
            )
        } 
    })


    return (
        <div>             
             <h1 className="headertextforregister">DoggyCare Register</h1>
             <div className="infoboxes">
                 <h1 className="infoboxestext">Present-Status</h1>
                 <h1 className="infoboxestext">Owners</h1>
                 <h1 className="infoboxestext">Information</h1>
             </div>
            
            {isPresent}
            
            
            
            
        </div>       
    )

}



export default Register;


/*   <div className="parent">
             {dogRegister.map((dogInfo, index) => {
                return
                 <div className="child">dogInfo.name</div>
                })}
                 <div className="child">child1</div> */