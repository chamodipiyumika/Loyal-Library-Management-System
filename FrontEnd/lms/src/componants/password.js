import { useState } from "react";
import FunctionalComHead from './header/header';
import FunctionalComFooter from './footer/footer';
import './css/password.css';

function FunctionalComPassword() {
  const [password, setPassword] = useState("");
 
  const handleSearch = (event) => {
    event.preventDefault();
    alert(`The user id you entered was: ${password}`)
  }

  return (
    <div className ="card-container">
      <FunctionalComHead />
     
      <div className="loginform" >
     
        <form onSearch={handleSearch} >
           <div className="restPage">
           <div>
            <h3>Update your password</h3>
           </div>

          <div className="labels">
          <label>Password:
            <input 
              type="pw"  name="password" placeholder="Enter your password.."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ display: 'block', margin: '10px 0' }}
            />
          </label>

          <label>Confirm Password:
            <input 
              type="pw"  name="password" placeholder="Re-enter your password.."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ display: 'block', margin: '10px 0' }}
            />
          </label>
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

export default FunctionalComPassword;