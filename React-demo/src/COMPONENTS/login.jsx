import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
export default function Login() {
   const navigate=useNavigate();
   const[userName,setUserName] =useState('')
   const[password,setPassword] =useState('')
   const handlesubmit=()=> {
      if(userName==="admin"&& password==="admin") {
         navigate("/carousel");

      }
      else{
         alert("invalid username and password");
      }
   }
return (
      <>
     {/* <div id="blur">
        <a href="#" className="popup" style={{marginLeft: "1200px"}}>Login/Regi</a> 
     </div>
      */}
    <div className="wrapper">
     <div className="right">
        <div className="tabs">
           <ul>
              {/* <li className="login_li">Login</li> */}
              <li className="register_li">Login</li>
              
           </ul>
        </div>
        <div className="register">
           {/* <div className="input_field">
              <input type="text" placeholder="Username" className="input" required="required" onChange={(e)=>setUserName(e.target.value)} value={userName}/>
              <span>Name</span>
           </div> */}
           <div className="input_field">
              <input type="text" placeholder="Email" className="input" required="required"/>
              <span>Email</span>
           </div>
           <div className="input_field">
              <input type="password" placeholder="Password" className="input" required="required" onChange={(e)=>setPassword(e.target.value)}value={password} />
              <span>Password</span>
           </div>
           {/* <div className="input_field">
              <input type="number" placeholder="+91 Mobile Number" className="input" required="required"/>
              <span>Mobile Number</span>
           </div> */}
           {/* <div className="input_field">
              <input type="checkbox" className="checkbox"/>I agree to be contacted by 99acres and others for similar properties or related services via  WhatsApp, phone, sms, e-mail etc.
           </div> */}
          
           
           <div onClick={handlesubmit} className="btn"><a href="#">Login</a></div>
           {/* <div><h5>By clicking you will be agreeing to <a href="#">Terms & Conditions</a></h5></div> */}
        </div>
        {/* <div className="login">
           <div className="input_field">
              <input type="text" placeholder="Username" className="input" required="required"/>
              <span>Name</span>
           </div>
           <div className="input_field">
              <input type="password" placeholder="Password" className="input" required="required"/>
              <span>Password</span>
           </div>
           <div className="btn"><a href="#">Continue</a></div>
        </div> */}
     </div>
  
     {/* <div className="left">
        <span className="clear"></span>
        <h1>99acres</h1>
        <h3>Create an account to unlock these benefits</h3>
        <div>
           <ul>
              <li>Get latest updates about Properties and Projects.</li>
              <li>Access millions of advertiser details in one click.</li>
              <li>Get market information, reports and price trends.</li>
              <li>Advertise your property for free!</li>
           </ul>
        </div>
        
     </div> */}
    </div>
  
      </>
    )
  }

