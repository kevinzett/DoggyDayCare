import { Link } from "react-router-dom";
import dogRegister from '../doggyregister.json';
import React from "react"; 
import './Info.css';


const Info = ({currentDog}) => {

const imagesrc = currentDog.src
    

        

    return (
        <section>    
            <h1 className="headertext">{currentDog.name} at DoggyCare</h1>   
             <div className="parentflexbox">
                 <div className="childflexbox"><img className="imginfo" src={currentDog.img}/></div>
                 <div className="childflexbox">
                     
                     <p className="headertextforinformation">About</p>
                     <h1 className="informationtext">Name - {currentDog.name} <br />
                     Age - {currentDog.age} <br />
                     Breed - {currentDog.breed} <br />
                     Sex - {currentDog.sex} <br />
                     </h1>
                     <p className="headertextforinformation">Contact </p>
                     <h1 className="informationtext">
                     Owner - {currentDog.owner.name + " " + currentDog.owner.lastName} <br />
                     Contant - {currentDog.owner.phoneNumber} <br />
                     Chipnumber - {currentDog.chipNumber}
                     </h1>
                     </div>
          </div>
          <div><Link to='/register'><button className="buttonback">Back!</button></Link></div>
        </section>        
    )

}

export default Info;


