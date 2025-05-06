/** @format */

import React from "react";
import Carousel from "./Carousel";
import Devider from "./Devider";
import ActionLink from "./ActionLink";

const hotels = [
  {
    title: "Hotel 1",
    text: " Feugiat pretium egestas enim blandit purus euismod. Feugiat magna aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur quam diam felis, fringilla varius.",
    buttonName: "Button 1",
    link: "https://example.com/",
  },
  {
    title: "Hotel 2",
    text: " Feugiat pretium egestas enim blandit purus euismod. Feugiat magna aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur quam diam felis, fringilla varius.",
    buttonName: "Button 2",
    link: "https://example.com/",
  },
  {
    title: "Hotel 3",
    text: " Feugiat pretium egestas enim blandit purus euismod. Feugiat magna aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur quam diam felis, fringilla varius.",
    buttonName: "Button 3",
    link: "https://example.com/",
  },
];

const VenueInfo = () => {
  return (
    <div id="venue">
      <div className="section venue-top">
        <div className="venue-text">
          <p className="venue-section-name">The Venue</p>
          <p className="venue-title">Gino Winery Estate</p>
          <p>
            Feugiat pretium egestas enim blandit purus euismod. Feugiat magna
            aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur
            quam diam felis, fringilla varius.
          </p>
          <p>4750 Tyler Avenue</p>
          <p>Boise, Idaho 83705</p>
        </div>
        <div className="venue-carousel">
          <Carousel />
        </div>
      </div>
      <div>
        <Devider />
      </div>
      <div className="hotel-section">
        {hotels.map((hotel) => (
          <div
            className="hotel"
            key={hotel.title}
          >
            <p className="hotel-title"> {hotel.title}</p>
            <p className="hotel-text">{hotel.text}</p>
            <ActionLink
              name={hotel.buttonName}
              link={hotel.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenueInfo;
