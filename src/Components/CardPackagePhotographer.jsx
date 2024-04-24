

const CardPackagePhotographer=({card})=>{
    return(
        <div className="card swiper-slide">
        <div className="image-content card-image">
        <img src={card.photographer.photographerImage} alt="" className="card-img" />
      </div>
      <div className="card-content">
        <h2 className="name">{card.photographer.photographer}</h2>
        <p className="description">{card.photographer.photographerDescription}</p>
      </div>

        </div>
      
    )
}
export default CardPackagePhotographer