import React from "react";
import img2 from "../assets/slide-1.jpg";
import img1 from "../assets/slider-2.jpg";

const Header = () => {
  return (
    <>
      <div className="container parent">
        <div className="header">
          <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
            <div class="carousel-inner">

              <div class="carousel-item">
                <img src={img1} class="d-block w-100" alt="..." />
                <div className="carousel-caption">
                  <span className="badge text-bg-warning">
                    Free Shipping - orders over $100
                  </span>
                  <h2 className="text-dark display-5 fw-bold mt-4">
                    Free Shipping on
                    <br />
                    orders over
                    <span className="text-success"> $100</span>
                  </h2>
                  <p className="lead">Free Shipping to First-Time Customers Only, After promotions and discounts are applied.</p>
                  <button className="shop-now">Shop Now
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="carousel-item active">
                <img src={img2} class="d-block w-100" alt="..." />
                <div className="carousel-caption">
                  <span class="badge text-bg-warning">Opening Sale Discount 50%</span>
                  <h2 class="text-dark display-5 fw-bold mt-4">SuperMarket For Fresh Grocery</h2>
                  <p class="lead">Introduced a new model for online grocery shopping and convenient home delivery.</p>
                  <button className="shop-now">Shop Now 
                  
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                  </button>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Header;
