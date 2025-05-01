import React from 'react'

const HeroSection = () => {
	return (
    <div
      id="home"
      className="section"
    >
      <div className="hero-text">
        <p className="subheading">Please join us to celebrate</p>
        <h1>Caleb & Amaya</h1>
        <p className="subheading">July 15, 2022 - Boise, Idaho</p>
      </div>
      <div>
        <img
          src="/hero-image.jpg"
          alt="image of Caleb and Amaya"
          className="hero-image"
        />
      </div>
    </div>
  );
}

export default HeroSection