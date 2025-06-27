import React from 'react';
import '../../styles/SliderControl.css';

const SliderControl = ({ label, id, min, max, step = 1, value, onChange }) => {
  const unit =
    id === 'letter-spacing' ? '%' : id === 'line-height' ? '' : 'px';

  return (
    <div className="slider-control">
      <label htmlFor={id}>
        {label}: {value}
        {unit}
      </label>
      <input
        type="range"
        id={id}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SliderControl;