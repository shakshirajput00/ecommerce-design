import React, { useState } from "react";
import "./Form1.css";


const Form1 = () => {
    // ------------------------------------increment decrement-------------------
  // const [num, setNum] = useState(0)
// const handleclick = (event) => {
  //     event.preventDefault()

  //     setNum(num + 1)
  //    }

  // const second = (event) => {
  //     event.preventDefault()

  //     if( num>=1 ){
  //         setNum(num - 1)
  //     }
  //    }
      
     const [username,setusername] = useState("");
     const [email,setemail] = useState("");
     const [password,setpassword] = useState("");
     const [phone,setphone] = useState("");
     
    
     



 const handleSubmit = (event)=>{
     event.preventDefault()
     
 }

  return (
    /* <p>{num}</p>
            <button onClick={handleclick}> click for increment (+)</button>  */
    /* <br/>   */
    /* <button onClick={second}> click for decrement(-)</button> */
    <>
    <form onSubmit={handleSubmit}>
      <div className="main">
    <div className="input1">
        
        <label htmlFor="username">username</label>
        <input type="text" id="username" onChange={(e)=> setusername(e.target.value)}/>
      {/* {usernameError ? <span>name length must be greater than  2character </span> : ""} */}
      </div>
      <br />
      <div className="input1">
        <label htmlFor="">email</label>
        <input type="text" name="email" onChange={(e)=>setemail(e.target.value)} />
        <span id="email"></span>
      </div>
      <br />
      <div className="input1">
        <label htmlFor="">password</label>
        <input type="password" name="password" onChange={(e)=>setpassword(e.target.value)}  />
        <span id="password"></span>
      </div>
      <br />
      <div className="input1">
        <label htmlFor="phone">phone</label>
        <input type="number "  name="phone" onChange={(e)=>setphone(e.target.value)} />
        <span id="phone"></span>
      </div>
      <br />
      
      <button type="submit">Registration</button>
      </div>
    </form>
   
   </>
  );
};

export default Form1;
