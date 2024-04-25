const CardPackageFood = ({ card }) => {
  return (
    <div className="card swiper-slide">
      <div className="image-content card-image">
        <img src={card.food.foodImage} alt="" className="card-img" />
      </div>
      <div className="card-content">
        <h2 className="name">{card.food.food}</h2>
        <p className="description">{card.food.foodDiscription}</p>
      </div>
    </div>
  );
};
export default CardPackageFood;
