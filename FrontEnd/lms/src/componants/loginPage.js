import { useState } from "react";
import FunctionalComHead from './header/header';
import FunctionalComFooter from './footer/footer';
import './css/loginpage.css';

function FunctionalComLogin(){

    const [name, setName] = useState("");

    const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  }

    return(
        <div>
            <FunctionalComHead />
            <div className = "loginform">
            <form onSubmit={handleSubmit}>
               <label>Enter your name:
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                 />
               </label>
               <input type="submit" />
            </form>
            </div>
            <FunctionalComFooter />
        </div>  
    );
}
export default FunctionalComLogin;


