import React from 'react';

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
          <option
            key={font}
            value={font}
            style={{ fontFamily: font }}  // <-- font preview works here
          >
            {font}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontSelector;