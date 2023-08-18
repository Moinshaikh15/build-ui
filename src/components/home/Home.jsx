import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      
      <img src="/pizza.jpeg" alt="pizza-image" className="pizza-img" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="375"
        height="426"
        viewBox="0 0 375 426"
        fill="none"
        className="pattern"
      >
        <path
          d="M55.6077 18.45C20.4129 22.9359 3.87142 8.01914 0 0L375 0.723531V424.17C241.499 440.429 273.111 343.496 279.27 325.046C285.429 306.596 328.015 185.405 273.111 96.7723C218.207 8.13972 99.6011 12.8427 55.6077 18.45Z"
          fill="#E23744"
        />
      </svg>

      <div className="header-container">
        <img src="/food-truck.png" alt="food-truck icon" className="logo" />
        <button className="get-in-touch-btn">Get In Touch</button>
      </div>

      <div className="content">
        <h1 className="heading">
          Discover the <span>Best</span> Food and Drinks
        </h1>
        <p>
          Naturally made Healthcare Products for the better care & support of
          your body.
        </p>
        <button>Explore Now!</button>
      </div>

    </div>
  );
}
