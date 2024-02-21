// import React from "react";                         ------------------------netflix demo-------------------------
// import Head from "./compnents/Head";
// import Cardd from "./compnents/Cardd";
// import Textt from "./compnents/Textt";
// import Sdata from "./compnents/Sdata";

// //  console.log(Sdata[0].sname);

// const App = () => {
//   const myArray = [
//     {
//       id: 1,
//       sname: "Kho Gaye Hum Kahan",
//       imgsrc: "https://i.ytimg.com/vi/RhRdHJ8hdks/maxresdefault.jpg",
//       tittle: "netflix original series",
//       link: "https://www.netflix.com/in/title/81688853",
//     },
//     {
//       id: 2,
//       sname: "jumanji",
//       imgsrc:
//         "https://th.bing.com/th/id/OIP.sqcO5wFCcufHs1MQuS3wnAHaLH?rs=1&pid=ImgDetMain",
//       tittle: "netflix original series",
//       link: "https://www.netflix.com/ca/title/81161789",
//     },
//     {
//       id: 3,
//       sname: "Life on Our Planet",
//       imgsrc:
//         "https://static.filmvandaag.nl/shows/original/12000/12223.jpg?v=2&width=240",
//       tittle: "netflix original series",
//       link: "https://www.netflix.com/in/title/80213846",
//     },
//     {
//       id: 4,
//       sname: "stranger things",
//       imgsrc:
//         "https://th.bing.com/th/id/OIP.nivozgg6Rsvx-68W61z78QHaK-?rs=1&pid=ImgDetMain",
//       tittle: "netflix original series",
//       link: "https://www.netflix.com/in/title/80057281",
//     },
//     {
//       id: 5,
//       sname: "kung-fu panda",
//       imgsrc:
//         "https://th.bing.com/th/id/OIP.F35lPgkF4tPbvW7mCWNiJgHaEo?rs=1&pid=ImgDetMain",
//       tittle: "netflix original series",
//       link: "https://www.netflix.com/in/title/81227574",
//     },

//     {
//       id: 5,
//       sname: "Our Planet",
//       imgsrc:
//         "https://4.bp.blogspot.com/-zdv7wl1Bybk/XKjChKa8WAI/AAAAAAAAQQQ/PvpDwimT8SIz1vCf_j7HFTwfhIxftE4rgCLcBGAs/s1600/Netflix-Our-Planet.jpg",
//       tittle: "netflix original series",
//       link: "https://www.netflix.com/in/title/80049832",
//     },
//   ];

//   return (
//     <div>
//       <Head />
//       <Textt />
//       <div className="d-flex flex-wrap  gap-2  mx-2 justify-content-center">

//         {myArray.map((item, index) => {
//           return (
//             <div key={index}>
//               <Cardd Sdata={item} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default App;

//  -------------------------------------------------------------------clock demo-----------------------------------------------------

// import React from 'react'
// import Clock from './compnents/Clock'

// const App = () => {

//   return (

//       <>
//       <Clock/>

//       {/* <h1>{date.toLocaleTimeString()}</h1> */}

//       </>

//   )
// }

// export default App

//                                  -----------------------------form start-------------------------------------------------
// import React, { useState } from "react";
// import Form1 from './compnents/Form1'
// import Cardd from './compnents/Cardd'
import Navbar from "./compnents/Navbar";
import Dropdownn from "./compnents/Dropdownn";
import Header from "./compnents/Header";
import Fruites from "./compnents/Fruites";
import Cards from "./compnents/Cards";
import Daily from "./compnents/Daily";
import Grocery from "./compnents/Grocery";
import Footer from "./compnents/Footer";



const App = () => {
  

  return (
    <>
     <Navbar/>
     <Dropdownn/>
     <Header/>
     <Fruites/>
     <Cards/>
     <Daily/>
     <Grocery/>
     <Footer/>
     
    

     
    </>
  );
};

export default App;
