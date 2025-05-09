import React from 'react'

const day1info = [
  {
    id: 1,
    time: "Time 1",
    title: "Activity title 1",
    description:
      "Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.",
  },
  {
    id: 2,
    time: "Time 2",
    title: "Activity title 2",
    description:
      "Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.",
  },
  {
    id: 3,
    time: "Time 3",
    title: "Activity title 3",
    description:
      "Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.",
  },
];

const Itinierary = () => {
  return (
    <div
      id="itinerary"
      className=""
    >
      <div className="itinerary-container">
        <div className="itinerary-title">Itinerary</div>
        <div className="tablist">
          <button className="tab">day 1</button>
          <button className="tab">day 2</button>
          <button className="tab">day 3</button>
        </div>
        <div className="timeline-rows">
          {day1info.map((item) => {
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

export default Itinierary