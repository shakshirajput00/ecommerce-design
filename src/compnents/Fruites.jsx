import React from "react";
import photo1 from "../assets/grocery-banner.png";
import photo2 from "../assets/grocery-banner-2.jpg";

const Fruites = () => {
  return (
    <>
      <div className="container">
        <div className="fruit-vegitabbles">
          <div className="fruit">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={photo1} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5 style={{color:"black"}}>  fruits &vegitables</h5>
                  <p style={{color:"black"}} >
                  Get Upto
                  <span style={{color:"black"}}>30%</span>
                  </p>
                  <button className="shop">Shop Now 
                  </button>
                </div>
              </div>
            </div>
            </div>
            <div className="bun">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={photo2} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                  <h5  style={{ paddingTop:"40px", color:"black"}}class="fw-bold mb-1">Freshly Baked Buns</h5>
                    <p style={{color:"black"}}>
                    Get Upto
                  <span style={{color:"black"}}>20%</span>
                    </p>
                    <button className="shop" style={{color:"black"}}>Shop Now 
                  </button>

                  </div>
                </div>
              </div>
            </div>
            
           
        </div>
        <h3 style={{marginTop:"80px"}}>Popular Products</h3>
      </div>
    </>
  );
};

export default Fruites;
