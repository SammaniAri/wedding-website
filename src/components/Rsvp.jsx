/** @format */

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const guestOptions = ["One", "Two", "Three", "Four"];
const attendanceOptions = [
  "Accept with pleasure",
  "Regretfully Decline",
  "Rehearsal Dinner",
  "Ceremony",
  "Reception",
];

const Rsvp = () => {
  const [state, handleSubmit] = useForm("xovdknrr");

  const handleCustomSubmit = (e) => {
    const selected = document.querySelector(
      'input[name="attendance[]"]:checked'
    );
    if (!selected) {
      e.preventDefault();
      alert("Please select at least one attendance option.");
      return;
    }
    handleSubmit(e);
  };

  if (state.succeeded) {
    return <p className="form-sent">Thanks!</p>;
  }

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
        <form
          className="form"
          onSubmit={handleCustomSubmit}
        >
          <div className="form-inner">
            <div className="name-row">
              <div className="field">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="name-input-box"
                  required
                />
                <ValidationError
                  prefix="First name"
                  field="firstName"
                  errors={state.errors}
                />
              </div>
              <div className="field">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="name-input-box"
                  required
                />
                <ValidationError
                  prefix="Last name"
                  field="lastName"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="email-input-box"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="field">
              <label>Number of Guests</label>
              <div className="radio-row">
                {guestOptions.map((label, index) => (
                  <div
                    className="radio-input-container"
                    key={label}
                  >
                    <label>
                      <input
                        type="radio"
                        name="guests"
                        value={label}
                        required={index === 0}
                      />
                      {label}
                    </label>
                  </div>
                ))}
                <ValidationError
                  prefix="Number of guests"
                  field="guests"
                  errors={state.errors}
                />
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
                        name="attendance[]"
                        value={label}
                      />
                      {label}
                    </label>
                  </div>
                ))}
                <ValidationError
                  prefix="Attendance"
                  field="attendance"
                  errors={state.errors}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Rsvp;
