/** @format */

import React from "react";

const guestOptions = ["One", "Two", "Three", "Four"];
const attendanceOptions = [
  "Accept with pleasure",
  "Regretfully Decline",
  "Rehearsal Dinner",
  "Ceremony",
  "Reception",
];

const Rsvp = () => {
  return (
    <div id="rsvp">
      <div className="container">
        <p className="rsvp-title">RSVP</p>
        <p>
          Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi.
          Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu
          euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim
          adipiscing sem.
        </p>
        <form className="form">
          <div className="form-inner">
            <div className="name-row">
              <div className="field">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className="name-input-box"
                />
              </div>
              <div className="field">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  className="name-input-box"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="email-input-box"
              />
            </div>

            <div className="field">
              <label>Number of Guests</label>
              <div className="radio-row">
                {guestOptions.map((label) => (
                  <div
                    className="radio-input-container"
                    key={label}
                  >
                    <label>
                      <input
                        type="radio"
                        name="guests"
                        value={label}
                      />
                      {label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="field">
              <label>Attendance</label>
              <div className="checkbox-row">
                {attendanceOptions.map((label) => (
                  <div
                    className="attendance-checkbox-container"
                    key={label}
                  >
                    <label>
                      <input
                        type="checkbox"
                        value={label}
                      />
                      {label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Rsvp;
