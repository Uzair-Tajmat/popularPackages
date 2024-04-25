import "./App.css";
import First from "./Components/FirstSection";
import Second from "./Components/SecondSection";
function App() {
  const silverData = [
    {
      venue: {
        venue: "City Lawn",
        venueImage:
          "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/196/969/new_large/blob?1687591932",
        venueDiscription: "Maginifiecient Hall",
      },
      food: {
        food: "Royal Cookers",
        foodImage:
          "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/196/969/new_large/blob?1687591932",
        foodDiscription: "Delicious Food",
      },
      photographer: {
        photographer: "Wedding Photograph",
        photographerImage:
          "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/196/969/new_large/blob?1687591932",
        photoDiscription: "Excellent Photography",
      },
    },
  ];
  return (
    <div className="main">
      <First item={silverData} />

      <Second />
    </div>
  );
}

export default App;
