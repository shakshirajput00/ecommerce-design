import React from "react";

const Footer = () => {
  const items = [
    {
      name: "categories",
      
    },
    {
      name: "vegitables and fruites",
    },
    {
      name: "Breakfast & instant food",
    },
    {
      name: "Atta, rice &dal",
    },
    {
      name: "Sauces & spreads",
    },
    {
      name: "Baby care",
    },
    {
      name: "Cleaning essentials",
    },
    {
      name: "Personal care",
    },
    
   
  ];
  return (
    <>
      <div className="footer mt-5">
        {items.map((item, index) => {
          return (
            <div className="categories ms-5  ">
              <div className="vegies  ">
                
                  {item.name}
    
                
              </div>
             
            </div>
            
            );
    })}

      </div>
     
      
     
    </>
  );
};

export default Footer;
