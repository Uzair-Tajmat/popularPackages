import React from "react";

const CardPackage = ({ card }) => {
  return (
   <>
      {/* Venue */}
      <div className="image-content card-image">
        <img src={card.venue.venueImage} alt="" className="card-img" />
      </div>
      <div className="card-content">
        <h2 className="name">{card.venue.venue}</h2>
        <p className="description">{card.venue.venueDescription}</p>
      </div>

      {/* Food */}
      <div className="image-content card-image">
        <img src={card.food.foodImage} alt="" className="card-img" />
      </div>
      <div className="card-content">
        <h2 className="name">{card.food.food}</h2>
        <p className="description">{card.food.foodDescription}</p>
      </div>

      {/* Photographer */}
      <div className="image-content card-image">
        <img src={card.photographer.photographerImage} alt="" className="card-img" />
      </div>
      <div className="card-content">
        <h2 className="name">{card.photographer.photographer}</h2>
        <p className="description">{card.photographer.photographerDescription}</p>
      </div>
    </>
  );
};

export default CardPackage;
