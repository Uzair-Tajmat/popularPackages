import React from "react";

const CardPackage = ({ card }) => {
  return (
    <div className="card swiper-slide">
      {/* Venue */}
      <div className="image-content card-image">
        <img src={card.venue.venueImage} alt="" className="card-img" />
      </div>
      <div className="card-content">
        <h2 className="name">{card.venue.venue}</h2>
        <p className="description">{card.venue.venueDescription}</p>
      </div>

      {/* Food */}
     
    </div>
  );
};

export default CardPackage;
