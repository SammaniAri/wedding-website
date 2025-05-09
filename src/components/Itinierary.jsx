/** @format */

import { React, useState } from "react";
import { day1info, day2info, day3info } from "../data/itineraryData";

const Itinierary = () => {
  const [clickedDateInfo, setClickedDateInfo] = useState(day1info);
  return (
    <div
      id="itinerary"
      className=""
    >
      <div className="itinerary-container">
        <div className="itinerary-title">Itinerary</div>
        <div className="tablist">
          <button
            className="tab"
            onClick={() => setClickedDateInfo(day1info)}
          >
            day 1
          </button>
          <button
            className="tab"
            onClick={() => setClickedDateInfo(day2info)}
          >
            day 2
          </button>
          <button
            className="tab"
            onClick={() => setClickedDateInfo(day3info)}
          >
            day 3
          </button>
        </div>
        <div className="timeline-rows">
          {clickedDateInfo.map((item) => {
            return (
              <div
                className="timeline-row"
                key={item.id}
              >
                <div className="time">{item.time}</div>
                <div>
                  <div className="activity-title">{item.title}</div>
                  <div className="activity-description">{item.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Itinierary;
