import React from "react";
import product1 from "../assets/product-img-1.jpg";
import product2 from "../assets/product-img-2.jpg";
import product3 from "../assets/product-img-3.jpg";
import product4 from "../assets/product-img-4.jpg";
import product5 from "../assets/product-img-5.jpg";
import product6 from "../assets/product-img-6.jpg";
import product7 from "../assets/product-img-7.jpg";
import product8 from "../assets/product-img-8.jpg";
import product9 from "../assets/product-img-9.jpg";
import product10 from "../assets/product-img-10.jpg";

import { FaStar } from "react-icons/fa";

const Cards = () => {
    const haldiram = [
        {
            name: "sale",
            value: "Snack & Munchies",
            para: "Haldiram's Sev Bhuji",
            img: product1,
            rs1: "$18",
            rs2: "$24",
        },
        {
            name: "14%",
            value: "Bakery & Biscuits",
            para: "NutriChoice Digestiv",
            rs1: "$18",
            rs2: "$24",
            img: product2,
        },
        {
            // name: "sale",
            value: "Bakery &amp; Biscuits",
            para: "Cadbury 5 Star Chocolate",
            rs1: "$18",
            rs2: "$24",
            img: product3,
        },
        {
            // name: "sale",
            value: "Snack & Munchies",
            para: "Onion Flavour Potato",
            rs1: "$18",
            rs2: "$24",
            img: product4,
        },
        {
            // name: "sale",
            value: "instant food",
            para: "Salted Instant Popcorn",
            rs1: "$18",
            rs2: "$24",
            img: product5,
        },
        {
            name: "sale",
            value: "Dairy, Bread & Eggs",
            para: "Blueberry Greek Yogurt",
            rs1: "$18",
            rs2: "$24",
            img: product6,
        },
        {
            // name: "sale",
            value: "Dairy, Bread & Eggs",
            para: "Britannia Cheese Slice",
            rs1: "$18",
            rs2: "$24",
            img: product7,
        },
        {
            // name: "sale",
            value: "instant food",
            para: "Kellogg's Original Cereals",
            rs1: "$18",
            rs2: "$24",
            img: product8,
        },
        {
            // name: "sale",
            value: "Snack & Munchies",
            para: ">Slurrp Millet Chocolate",
            rs1: "$18",
            rs2: "$24",
            img: product9,
        },
        {
            // name: "sale",
            value: "Dairy,Bread & Eggs",
            para: "Amul Butter - 500 ",
            rs1: "$18",
            rs2: "$24",
            img: product10,

        },
    ];
    return (
        <>
            {/* <div className="abc d-flex justify-content-around "> */}
            <div className="container">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 250px) ", gap: "12px" }}>
                    {haldiram.map((item, index) => {
                        return (
                            <div className="cardd">
                                <div className="position-relative">
                                    <span className={item.name !== "sale" ? "cardGreen cardd1 position-absolute"  :"cardd1 position-absolute"}> {item.name}</span>
                                    <img src={item.img} alt="" style={{height: "200px", objectFit:"contain"}} />
                                </div>
                                <div className="text-start ps-3">
                                <small className="text-muted">{item.value}</small>
                                <p >{item.para}</p>
                                </div>
                                <div className="text-start ps-3">
                                    <FaStar style={{ color: "#ffc107" }} />
                                    <FaStar style={{ color: "#ffc107" }} />
                                    <FaStar style={{ color: "#ffc107" }} />
                                    <FaStar style={{ color: "#ffc107" }} />
                                    <FaStar style={{ color: "#ffc107" }} />
                                    5.5 (149)
                                </div>
                                <div className="pb-3 p-3 w-100 d-flex justify-content-between align-items-center">
                                    <span className="d-block">{item.rs2}</span>
                                    <button className="add d-block m-0">+ Add</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Cards;
