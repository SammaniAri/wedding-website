import React from 'react'

const Itinierary = () => {
	return (
    <div
      id="itinerary"
      className=""
    >
      <div className="itinerary-container">
        <div className="itinerary-title">Itinerary</div>
        <div className="tablist">
          <button className="tab">day1</button>
          <button className="tab">day2</button>
          <button className="tab">day3</button>
        </div>
        <div className="timeline-rows">
          <div className="timeline-row">
            <div className="time">Time 1</div>
            <div>
              <div className="activity-title">Activity Title</div>
              <div className="activity-description">
                Phasellus accumsan neque viverra ut sem aliquam purus rhoncus,
                morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim
                sit. Libero eu euismod risus, mauris etiam ut morbi amet in.
                Tortor duis dignissim adipiscing sem.
              </div>
            </div>
          </div>
          <div className="timeline-row">
            <div className="time"> Time 2</div>
            <div>
              <div className="activity-title">Activity Title</div>
              <div className="activity-description">
                Phasellus accumsan neque viverra ut sem aliquam purus rhoncus,
                morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim
                sit. Libero eu euismod risus, mauris etiam ut morbi amet in.
                Tortor duis dignissim adipiscing sem.
              </div>
            </div>
          </div>
          <div className="timeline-row">
            <div className="time"> Time 3</div>
            <div>
              <div className="activity-title">Activity Title</div>
              <div className="activity-description">
                Phasellus accumsan neque viverra ut sem aliquam purus rhoncus,
                morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim
                sit. Libero eu euismod risus, mauris etiam ut morbi amet in.
                Tortor duis dignissim adipiscing sem.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Itinierary