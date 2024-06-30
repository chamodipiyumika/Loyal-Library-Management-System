import { useState } from "react";
import { Link } from "react-router-dom";
import FunctionalComHead from './header/header';
import FunctionalComFooter from './footer/footer';
import './css/loginpage.css';
function FunctionalComLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The email you entered was: ${email} ${password}`)
  }

  return (
    <div className ="card-container">
      <FunctionalComHead />
     
    
      <div className="loginform" >
     
        <form onSubmit={handleSubmit} >
        <div className="formpage">
        
         
        <h1 className ="h1">Login Page</h1>

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
          
          </div>
          <div className="p1">
              <Link to="/restore-password">Forgot password</Link>
            </div>
          </div>
          <div class="btn">
          <input className="submit" type="submit"/>
         </div>
          
          <div className="p2">
            <p>Don't have an account? <Link to="/restore-password">click here to register</Link> </p>
          </div>
        </form>
      </div>
      

      <FunctionalComFooter />
    </div>  
  );
}

export default FunctionalComLogin;
