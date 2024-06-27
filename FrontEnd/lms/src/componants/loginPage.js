import { useState } from "react";
import FunctionalComHead from './header/header';
import FunctionalComFooter from './footer/footer';
import './css/loginpage.css';
function FunctionalComLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The email you entered was: ${email}`)
    alert(`The password you entered was: ${password}`);
  }

  return (
    <div>
      <FunctionalComHead />
      <div className="loginform" >
        <form onSubmit={handleSubmit} >
            <div className = "form">
          <label>Email:
            <input 
              type="text" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ display: 'block', margin: '10px 0' }}
            />
          </label>
         
          <label>Password:
            <input 
              type="pw" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ display: 'block', margin: '10px 0' }}
            />
          </label>
          </div>
          <input type="submit"  />
        </form>
      </div>
      <FunctionalComFooter />
    </div>  
  );
}

export default FunctionalComLogin;
