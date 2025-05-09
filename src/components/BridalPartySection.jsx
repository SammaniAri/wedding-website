import React from 'react'
import Devider from "./Devider";
import { useState } from "react";
import { groomsmen, bridesmaids } from "../data/bridalPartyData";

const BridalPartySection = () => {
  const [activeGroup, setActiveGroup] = useState("groomsmen");
  const groupToDisplay = activeGroup === "groomsmen" ? groomsmen : bridesmaids;
  return (
    <div id="bridal-party-section">
      <div className="bridal-party-wrapper">
        <div className="bridal-party-title">The Bridal Party</div>
        <div className="bridal-group">
          <div className="button-set">
            <button
              className={`bridal-party-button ${
                activeGroup === "groomsmen" ? "active" : ""
              }`}
              onClick={() => setActiveGroup("groomsmen")}
            >
              Groomsmen
            </button>
            <button
              className={`bridal-party-button ${
                activeGroup === "bridesmaids" ? "active" : ""
              }`}
              onClick={() => setActiveGroup("bridesmaids")}
            >
              Bridesmaids
            </button>
          </div>
          {groupToDisplay.map((person) => (
            <div key={person.name}>
              <img
                src={person.photo}
                alt={`Image of ${person.name || "a bridal party member"}`}
                className="bridal-team-images"
              />
              <div className="person-name">{person.name}</div>
            </div>
          ))}
        </div>
      </div>
      <Devider />
    </div>
  );
};

export default BridalPartySection