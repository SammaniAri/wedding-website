/** @format */

import React from "react";
import Carousel from "./Carousel";

const VenueInfo = () => {
  return (
    <div
      id="venue"
      className="section"
    >
      <div className="venue-text">
        <p className="venue-section-name">The Venue</p>
        <p className="venue-title">Gino Winery Estate</p>
        <p>
          Feugiat pretium egestas enim blandit purus euismod. Feugiat magna
          aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur quam
          diam felis, fringilla varius.
        </p>
        <p>4750 Tyler Avenue</p>
        <p>Boise, Idaho 83705</p>
      </div>
      <div className="venue-carousel">
        <Carousel />
      </div>
    </div>
  );
};

export default VenueInfo;
