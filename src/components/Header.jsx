import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <a href="#home">Home</a>
        <a href="#our-story">Our Story</a>
        <a href="#venue">Venue</a>
        <img
          src="/navLogo.svg"
          alt="C and A Logo"
          className="logo"
        />
        <a href="#itinierary">Itinierary</a>
        <a href="#registry">Registry</a>
        <a href="#rsvp">RSVP</a>
      </div>
    </div>
  );
};

export default Header