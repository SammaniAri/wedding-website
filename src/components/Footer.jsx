import React from 'react'

const Footer = () => {
	const year = new Date().getFullYear();
  return (
    <div id="footer">
      <div className="footer-container">
        <p>
          Design by
          <a
            href="https://www.figma.com/@abelhancock"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span> Abel Hancock </span>
          </a>
          | Customized and developed by
          <a
            href="https://www.linkedin.com/in/sammani-ariyarathne/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span> Sammani Ariyarathne </span>
          </a>
          ©{year} | Hobby Project
        </p>
      </div>
    </div>
  );
}

export default Footer