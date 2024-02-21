import React from "react";
import clock from "../assets/clock.svg";
import gift from "../assets/gift.svg";
import pack from "../assets/package.svg";
import refresh from "../assets/refresh-cw.svg";

const Grocery = () => {
  const features = [
    {
      img: clock,
      name: "10 minute grocery now",
      value:
        "Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.",
    },
    {
      img: gift,
      name: "Best Prices & Offers",
      value:
      "Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.",
    },
    {
      img: pack,
      name: "Wide Assortment",
      value:
        "Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.",
    },
    {
      img: refresh,
      name: "Easy Returns",
      value:
        "Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy .",
    },
  ];
  return (
    <>
      <div className="container mt-5">
        <div className="main1">
          {features.map((item, index) => {
            return (
              <div className="clock p-4 m-3">
                <img src={item.img} alt="" />
                <h5 className="mt-4 font-size: 2.09375rem;">{item.name}</h5>
                <p
                  className="order margin-bottom: 1rem;margin-top: 0;"
                >
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Grocery;
