import { useState } from "react";
import { Link } from "react-router-dom";
import FunctionalComHead from './header/header';
import FunctionalComFooter from './footer/footer';
import './css/resetpwPage.css';

function FunctionalComReset() {
  const [userid, setUserid] = useState("");
 
  const handleSearch = (event) => {
    event.preventDefault();
    alert(`The user id you entered was: ${userid}`)
  }

  return (
    <div className ="card-container">
      <FunctionalComHead />
     
      <div className="loginform" >
     
        <form onSearch={handleSearch} >
           <div className="restPage">
              <div className ="p1">
                 <p>To reset your password, pease enter your UserId below..</p>
              </div>
           <div>
            <h3>Search by UserId</h3>
           </div>

          <div className="label">
          <label>UserId:
            <input 
              type="text"  name="userid" placeholder="Enter your userid.."
              value={userid}
              onChange={(e) => setUserid(e.target.value)}
              style={{ display: 'block', margin: '10px 0' }}
            />
          </label>
          </div>
          </div>
          <div class="btn">
          <input className="submit" type="submit"/>
         </div>
          
          <div className="p2">
            <p>Don't have an account? <spam><Link to="/goto-register"> 
                         Click here to register</Link></spam></p>
          </div>
        </form>
      </div>
      

      <FunctionalComFooter />
    </div>  
  );
}

export default FunctionalComReset;