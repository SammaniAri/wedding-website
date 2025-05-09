import React from 'react'

const Registry = () => {
	return (
    <div
      id="registry"
      className="section"
    >
      <div className="registry-container">
        <div className="registry-description">
          <div className="registry-title">Registry</div>
          <div>
            Phasellus accumsan neque viverra ut sem aliquam purus rhoncus,
            morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit.
            Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis
            dignissim adipiscing sem.
          </div>
        </div>
        <div className="registry-logos">
          <div>
            <img
              src="/minty.png"
              alt="brand logo of Minty"
              className="registry-brand-image"
            />
          </div>
          <div>
            <img
              src="/terra.png"
              alt="brand logo of Terra"
              className="registry-brand-image"
            />
          </div>
          <div>
            <img
              src="/dune.png"
              alt="brand logo of Dune"
              className="registry-brand-image"
            />
          </div>
          <div>
            <img
              src="/blossom.png"
              alt="brand logo of Blossom"
              className="registry-brand-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registry