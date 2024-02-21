import React from "react";
import "./Dropdownn.css";
import cofee from "../assets/banner-coffee.jpg";
import french from "../assets/french1.jpg";
import french1 from "../assets/product-img-12.jpg";
import french2 from "../assets/product-img-13.jpg";
import { FaStar } from "react-icons/fa";

const Daily = () => {
  const daily = [
    {
      name: "Roast Ground Coffee",
      value: "Tea, Coffee & Drinks",
      text: "$13",
      oldPrice: "$18",
      img: french,
    },
    {
      name: "Roast Ground Coffee",
      value: "Tea, Coffee & Drinks",
      text: "$13",
      oldPrice: "$18",
      img: french1,
    },
    {
      name: "Roast Ground Coffee",
      value: "Tea, Coffee & Drinks",
      text: "$13",
      oldPrice: "$18",
      img: french2,
    },
  ];
  return (
    <>
      <div className="container ">
        <h3 style={{ marginTop: "80px" }}>Daily Best Sells</h3>

        <div
          className="coffee "
          style={{ marginTop: "80px", display: "flex", gap: "20px" }}
        >
          <div className="coffee1">
            <div class="card">
              <div className="txt">
                <h3>100% Organic Coffee Beans.</h3>

                <p>Get the best deal before close.</p>
                <button className="shop text-center">
                  Shop Now <big>&#8674;</big>
                </button>
              </div>
              <img src={cofee} style={{ borderRadius: "10px" }} alt="..." />
            </div>
          </div>

          {daily.map((item, index) => {
            return (
              <div class="card1 p-2" style={{width: "20rem"}}>
                <img
                  src={item.img}
                  className="p-2"
                  // style={{ height: "227px", width: "329px" }}
                  alt="..."
                />

                <div className="text-start ms-2">
                  <small className="text-muted">{item.value}</small>
                  <p>{item.name}</p>
                </div>
                <div className="text-start px-3 d-flex justify-content-between">
                  <div>
                    <span>
                    {item.text} 
                    </span>
                    <span className="ms-2" style={{textDecorationLine: "line-through", textDecorationColor: "grey", color: "grey"}}>{item.oldPrice}</span>
                  </div>
                  <div className="star">
                    <FaStar style={{ color: "#ffc107" }} />
                    <FaStar style={{ color: "#ffc107" }} />
                    <FaStar style={{ color: "#ffc107" }} />
                    <FaStar style={{ color: "#ffc107" }} />
                    4.5
                  </div>
                </div>
                <button className="addd">+ Add to Cart</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Daily;
