import React, { useEffect } from "react";
import Swiper from "swiper";
import img from "../assets/Test1.png";
import img1 from "../assets/Test2.jpeg";
import "swiper/swiper-bundle.css";
import CardPackage from "./CardPersonalPackage";
const First = ({item}) => {
  useEffect(() => {
    const swiper = new Swiper(".slide-content", {
      slidesPerView: 1,
      spaceBetween: 25,
      loop: true,
      centeredSlides: false,
      fadeEffect: {
        crossFade: true,
      },
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 1,
        },
        950: {
          slidesPerView: 1,
        },
      },
      effect: "flip",
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);
  return (
    <div className="first">
     
      <div className="slide-container swiper-container">
        <div className="slide-content">
          <div className="card-wrapper swiper-wrapper">
          <div className="card swiper-slide">
            {item.map((content)=>(
                <CardPackage card={content}/>
            ))}
            </div>
          </div>
        </div>
        <div className="swiper-button-next swiper-navBtn"></div>
        <div className="swiper-button-prev swiper-navBtn"></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};
export default First;
