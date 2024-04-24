import React, { useEffect } from "react";
import Swiper from "swiper";
import img from "../assets/Test1.png";
import img1 from "../assets/Test2.jpeg";
import "swiper/swiper-bundle.css";
const First = () => {
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
      <h1>Package Name</h1>
      <div className="slide-container swiper-container">
        <div className="slide-content">
          <div className="card-wrapper swiper-wrapper">
            <div className="card swiper-slide">
              <div className="image-content card-image">
                {/* <span className="overlay"></span> */}

                <img
                  src="https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/196/969/new_large/blob?1687591932"
                  alt=""
                  className="card-img"
                ></img>
              </div>
              <div class="card-content">
                <h2 class="name">City Lawns</h2>
                <p class="description">
                  A magnifiecient place to combine hearts
                </p>
              </div>
            </div>

            <div className="card swiper-slide">
              <div className="image-content card-image">
                {/* <span className="overlay"></span> */}

                <img src={img1} alt="" className="card-img"></img>
              </div>
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
