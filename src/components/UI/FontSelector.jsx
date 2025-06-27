import React from 'react';
import '../../styles/FontSelector.css';

const FontSelector = ({ fonts, selectedFont, onChange }) => {
  return (
    <div className="font-selector">
      <label htmlFor="font-select">Choose a font:</label>
      <select
        id="font-select"
        value={selectedFont}
        onChange={(e) => onChange(e.target.value)}
      >
        {fonts.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontSelector;