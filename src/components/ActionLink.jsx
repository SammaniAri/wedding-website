import React from 'react'

const ActionLink = (props) => {
	return (
    <a
      className="button"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"    
    >
      {props.name}
    </a>
  );
}

export default ActionLink