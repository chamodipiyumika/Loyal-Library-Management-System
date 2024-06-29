import { useState } from "react";
import FunctionalComHead from './header/header';
import FunctionalComFooter from './footer/footer';
import './css/registerPage.css';

function FunctionalComReg() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConPassword, setConPassword] = useState("");
  const [phone, setPhone] = useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The email you entered was: ${email} ${password} ${phone}`)
  }

  return (
    <div className ="card-container">
      <FunctionalComHead />
     
      <div className="loginform" >
     
        <form onSubmit={handleSubmit} >
        <div className="formpage">
          
        <h1 className ="h1">Register Page</h1>

          <div className="labels">
          <label>Email:</label>
            <input 
              type="text"  name="email" placeholder="Enter your email.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />
          
          <label>Password:</label>
            <input 
              type="pw" name="password" placeholder="Enter your password.."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

         <label>Confirm Password:</label>
            <input 
              type="pw" name="ConPassword" placeholder="Confirm your password.."
              value={ConPassword}
              onChange={(e) => setConPassword(e.target.value)}
            />

          <label>Phone Number:</label>
            <input 
              type="text" name="phone" placeholder="Enter your phone number.."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          
          </div>
         
          </div>
          <div class="btn">
          <input className="submit" type="submit"/>
         </div>
        </form>
      </div>
      

      <FunctionalComFooter />
    </div>  
  );
}

export default FunctionalComReg;
