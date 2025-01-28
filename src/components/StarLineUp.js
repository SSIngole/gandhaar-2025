import React, { useState } from "react";
import "../style/StarLineUp.css";
import jerryMagician from "../star_dev_images/Jerry Magician.png";
import bandImage from "../star_dev_images/band.JPG";


function StarLineUp() {
  const [showFirstCard, setShowFirstCard] = useState(true);


  const handleNextCard = () => {
    setShowFirstCard(!showFirstCard);
  };


  return (
    <div className="star-lineup-container">
      <h2>Star Line Up</h2>
      <div className="star-gift-container">
        <div className="star-gift">
          <input type="checkbox" id="star-click" />
          <label htmlFor="star-click" className="star-click">Tap to reveal</label>
          {showFirstCard ? (
            <div className="star-card-container">
              <div className="star-card">
                <div className="star-card-inner">
                  <div className="star-card-front">
                    <img src={bandImage} alt="Concert" />
                  </div>
                  <div className="star-card-back">
                    <h1>Rock the night away with Oxygen on the Rocks Band!</h1>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="star-card-container">
              <div className="star-card">
                <div className="star-card-inner">
                  <div className="star-card-front">
                    <img src={bandImage} alt="Macaw" />
                  </div>
                  <div className="star-card-back">                    
                    <h1>Rock the night away with Oxygen on the Rocks Band!</h1>
                  </div>
                </div>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default StarLineUp;