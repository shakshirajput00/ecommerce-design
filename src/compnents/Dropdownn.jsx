import React from 'react'
import "./Dropdownn.css";

const Dropdownn = () => {
    const navheading = [
        {
          name: "All departments",
          value: ["Dairy,bread and eggs","snack and munchies","fruit and vegitables","cold drink and juices","breakfast and instant food","bakery and biscuites","chiken, meat and fish "],
        },
        {
          name: "Home",
          value: ["home 1", "home 2", "home 3", "home4", "home5"],
        },
        
        {
          name: "shop",
          value: ["shop grid - filter", "shop grid- list","shop-list filter","shop-filter","shop wide","shop-single"],
        },
        {
          name: "store",
          value: ["shop-grid","shop-list","shop-single"],
        },
        {
          name: "mega menu",
          value: []
          
        },
        {
          name: "pages",
          value: ["BLOg","blog-single","blog category","About us ", "404 error","contact",],
        },
        {
          name: "Acount",
          value: ["signIn","SignUp","forgot password","my account",],
        },
        {
          name: "Dashboard",
          value:[]
        },
        {
          name: "Docs",
          value: ["Documentation","changelog v1.2.1"],
        },
        
      ];
  return (
    <>
    <div className="container">
      <div className=" d-flex">
        {navheading?.map((item) =>{

        return(
          <div className="dropdown">
            <a
              style={{ backgroundColor: "white",color:"black", width: "130px",border:"none"}}
              class="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {item.name}
            </a>
                 
            <ul class="dropdown-menu"  aria-labelledby="dropdownMenuLink">
              {item.value.map((value) => (
                <li>
                  <a class="dropdown-item" href="#">
                    {value}
                  </a>
                </li>
              ))}
            </ul>

          </div>
          
          
        )}
        )}

        
        
      </div>
      
    </div> 

    <hr />

    
   
  </>
  
);
};

export default Dropdownn;
