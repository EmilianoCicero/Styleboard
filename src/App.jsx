import React, { useState, useEffect } from 'react';
import FontSelector from './components/UI/FontSelector';
import SliderControl from './components/UI/SliderControl';
import { googleFonts } from './utils/googleFonts';
import './styles/App.css';

const App = () => {
  const [font, setFont] = useState("Roboto");
  const [baseFontSize, setBaseFontSize] = useState(16); // px, 12-20
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [lineHeight, setLineHeight] = useState(1.5);

  useEffect(() => {
    const linkId = 'google-font-link';
    let link = document.getElementById(linkId);
    const href = `https://fonts.googleapis.com/css2?family=${font.replace(' ', '+')}:wght@400;700&display=swap`;

    if (link) {
      link.href = href;
    } else {
      link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }
  }, [font]);

  // Base multipliers for text elements
  const baseSizes = {
    h1: 4,
    h2: 3,
    p: 1,
    small: 0.875,
  };

  return (
    <div className="app-wrapper">
      <div className="sidebar">
        <h1 className="app-title">StyleBoard</h1>
        <p className="app-subtitle">Design decisions made easy.</p>
        <FontSelector fonts={googleFonts} selectedFont={font} onChange={setFont} />

        <div className="slider-block">
          <SliderControl
            label={`Base Font Size`}
            id="base-font-size"
            min={12}
            max={20}
            value={baseFontSize}
            onChange={(e) => setBaseFontSize(+e.target.value)}
          />
        </div>

        <div className="slider-block">
          <SliderControl
            label="Letter Spacing"
            id="letter-spacing"
            min={-6}
            max={6}
            value={letterSpacing}
            onChange={(e) => setLetterSpacing(+e.target.value)}
          />
        </div>

        <div className="slider-block">
          <SliderControl
            label="Line Height"
            id="line-height"
            min={1}
            max={3}
            step={0.05}
            value={lineHeight}
            onChange={(e) => setLineHeight(+e.target.value)}
          />
        </div>
      </div>

      <div
        className="app-container"
        style={{
          fontFamily: font,
          letterSpacing: `${letterSpacing / 100}em`,
          lineHeight,
        }}
      >
        <h1 style={{ fontSize: `${baseSizes.h1 * baseFontSize}px` }}>
          This is a preview with <strong>{font}</strong>.
        </h1>
        <h2 style={{ fontSize: `${baseSizes.h2 * baseFontSize}px` }}>
          Subtitle example
        </h2>
        <p style={{ fontSize: `${baseSizes.p * baseFontSize}px` }}>
          This paragraph text scales based on the base font size slider.
        </p>
        <small style={{ fontSize: `${baseSizes.small * baseFontSize}px` }}>
          Small text example.
        </small>
      </div>
    </div>
  );
};

export default App;