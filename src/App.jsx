import React, { useState, useEffect } from 'react';
import FontSelector from './components/UI/FontSelector';
import SliderControl from './components/UI/SliderControl';
import { googleFonts } from './utils/googleFonts';
import './styles/App.css';

const App = () => {
  const [font, setFont] = useState(googleFonts[0]);
  const [fontSize, setFontSize] = useState(16);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [lineHeight, setLineHeight] = useState(1.5);

  // Load Google Font dynamically
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

  return (
    <div
      className="app-container"
      style={{
        fontFamily: font,
        fontSize: `${fontSize}px`,
        letterSpacing: `${letterSpacing / 100}em`,
        lineHeight,
      }}
    >
      <h1 className="app-title">StyleBoard</h1>
      <p className="app-subtitle">Design decisions made easy.</p>

      <FontSelector fonts={googleFonts} selectedFont={font} onChange={setFont} />

      <div className="slider-block">
        <SliderControl
          label="Font size"
          id="font-size"
          min={12}
          max={20}
          value={fontSize}
          onChange={(e) => setFontSize(+e.target.value)}
        />
      </div>

      <div className="slider-block">
        <SliderControl
          label="Letter spacing"
          id="letter-spacing"
          min={-6}
          max={6}
          value={letterSpacing}
          onChange={(e) => setLetterSpacing(+e.target.value)}
        />
      </div>

      <div className="slider-block">
        <SliderControl
          label="Line height"
          id="line-height"
          min={1}
          max={3}
          step={0.05}
          value={lineHeight}
          onChange={(e) => setLineHeight(+e.target.value)}
        />
      </div>

      <div className="preview-text">
        <p>
          This is a preview with <strong>{font}</strong>.
        </p>
      </div>
    </div>
  );
};

export default App;