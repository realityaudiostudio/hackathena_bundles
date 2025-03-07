import React from 'react';
import './TitleComponent.css'; 

const TitleComponent = ({ text }) => {
  return (
    <div className="title-component">
      <div className="title-decoration">
        <span className="title-decorative-line-left"></span>
        <h2 className="title-heading">{text}</h2>
        <span className="title-decorative-line-right"></span>
      </div>
      
    </div>
  );
};

export default TitleComponent;
