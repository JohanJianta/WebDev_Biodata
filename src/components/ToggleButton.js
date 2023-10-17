import React from 'react';

const ToggleButton = ({ toggleFunction, children }) => {
  return (
    <button
      className="Custom-button"
      onClick={() => toggleFunction((prev) => !prev)}
    >
      {children}
    </button>
  );
};

export default ToggleButton;