import { useState } from "react";
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
            <h2>Search by UserId</h2>
           </div>

          <div className="label">
          <label>UserId:
            <input 
              type="text"  name="userid" placeholder="Enter your userid.."
              value={userid}
              onChange={(e) => setEmail(e.target.value)}
              style={{ display: 'block', margin: '10px 0' }}
            />
          </label>
          </div>
          </div>
          <div>
          <input className="search" type="search"/>
         </div>
          
          <div className="p2">
            <p>Don't have an account? click here to register</p>
          </div>
        </form>
      </div>
      

      <FunctionalComFooter />
    </div>  
  );
}

export default FunctionalComReset;