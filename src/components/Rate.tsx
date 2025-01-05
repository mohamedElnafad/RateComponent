import React, { useState } from 'react';
import './rate.css';

const Rate = ({ totalItems = 5 }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const handleTabKey = (event: any) => {
    switch (event.key) {
      case 'Enter': {
        setSelectedIndex(selectedIndex);
        event.preventDefault();
        break;
      }
      case 'Tab': {
        setSelectedIndex((prev: number) => prev + 1);
        break;
      }
      default: {
        return;
      }
    }
  };

  return (
    <div className='rate-container'>
      {Array.from({ length: totalItems }, (_, index) => (
        <button
          key={index}
          className={`rate-item ${
            hoverIndex !== null && index <= hoverIndex
              ? 'hovered'
              : selectedIndex !== null && index <= selectedIndex
              ? 'selected'
              : ''
          }`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
          onKeyDown={handleTabKey}
        >
          ★
        </button>
      ))}
    </div>
  );
};

export default Rate;
