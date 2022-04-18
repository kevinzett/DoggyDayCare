import { Link } from "react-router-dom";
import './Welcome.css';
import dogRegister from '../doggyregister.json'; 

const Welcome = () => {


    return (
        <section>
             <h1 className="headertext">Welcome To DoggyCare</h1>
             <div className="parent">
                 <div className="child"> 
                 <h1 className="headertexttwo">Dogs having a good time at DoggyCare</h1>
                 <img className="welcomeimg" src="https://images.dog.ceo/breeds/groenendael/n02105056_5700.jpg" ></img>
                  </div>
                  <div className="child"> 
                 <img className="welcomeimg" src="https://images.dog.ceo/breeds/pomeranian/n02112018_8161.jpg" ></img>
                  </div>
                  <div className="child"> 
                 <img className="welcomeimg" src="https://images.dog.ceo/breeds/doberman/n02107142_3236.jpg" ></img>
                 <h1 className="headertexttwo">We're here for you and your dog</h1>
                  </div>
                

             </div>
             <Link to='/register'>
                <button className="welcomebutton">Visit DoggyCare</button>
            </Link>
        </section>        
    )

    

}

export default Welcome;