import React from "react"
import dogRegister from '../doggyregister.json'; 
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import './Changedstatus.css';

const Changedstatus = () => {

    
    let navigate = useNavigate();

    const goBack = () => {
        setTimeout(() => {
            navigate("/Register/")
        }, 3000);
    }

   

  
   


    return (
        goBack(), <div>
        <header className="headerchangedstatus">
            <h1 className="headerchangedstatustextone">Aloha</h1>
        <p className="headerchangedstatustexttwo">
           We at DoggyCare love dogs and we will do everything <br></br>
           we can to make you and your dog feel good about your visit.
        </p>
        </header>
        </div>
        
    )



}


export default Changedstatus;