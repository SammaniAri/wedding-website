import React from 'react'
import Devider from "./Devider";

const groomsmen = [
  { name: "Julian Bernard", photo: "/groomsman1.jpg" },
  { name: "Damán Haber", photo: "/groomsman2.jpg" },
  { name: "Patrik Pavone", photo: "/groomsman3.jpg" },
  { name: "David Tatum", photo: "/groomsman4.jpg" },
];

const BridalPartySection = () => {
  return (
    <div id="bridal-party-section">
      <div className="bridal-party-wrapper">
        <div className="bridal-party-title">The Bridal Party</div>
        <div className="bridal-group">
          <div>buttons</div>
          {groomsmen.map((person, index) => (
            <div key={person.name}>
              <img
                src={person.photo}
                alt={`Image of ${person.name}`}
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