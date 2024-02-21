import React, { } from "react";
import "./Clock.css";

let date = new Date();
// const [seconds,settime]=useState(new Date())
// useEffect(()=>{
//  setInterval(()=>settime(new Date()),1000)
// },[])
 console.log(date);

let time = date.getHours();
let val;
if (time >= 4 && time < 12) {
  val = "Good Morning";
} else if (time >= 12 && time < 15) {
  val = "Good Afternoon";
} else if (time >= 15 && time < 18) {
  val = "Good Evening";
} else if (time >= 18 && time < 24) {
  val = "Good Night";
}
const Clock = () => {
  return (
    <>
   
      <div className="main">
        <div className="child">
          <div className="outer">
            <div className="clock-body">
              <p
                style={{
                  textShadow: "2px 20px 25px red",
                  fontSize: "50px",
                  fontWeight: 800,
                  color: "blue",
                }}
              >
                {date.toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>
        <div className="child">
          <p
            style={{
              fontSize: "90px",
              fontWeight: 500,
              color: "black",
              lineHeight: 1,
              textShadow: "2px 20px 25px green",
            }}
          >
           
            {val}
          </p>
          
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default Clock;
