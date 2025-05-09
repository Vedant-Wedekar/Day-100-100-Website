import React from 'react';
import L from './assets/L.mp4'; // Ensure this path is correct
import g from './assets/g.mp4'; // Ensure this path is correct
import './App.css'; // Assuming you put the CSS in a separate file
import Footer from './components/Footer'; // Adjust the import path as necessary
import './App.css'; // Assuming you put the CSS in a separate file
const App = () => {
  return (
    <div className="container">
      <div className="fnt text-3xl font-medium">@TG-VED</div>
      <svg width="800" height="600">
        <defs>
          <mask id="text-mask">
            <rect width="100%" height="100%" fill="black" />
            <text
            style={{fontWeight: 400 }}
              className="fnt font-bold pt-[-100px]"
              x="50%"
              y="50%"
              fontSize="210"
              fontWeight={600}
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              VED-STUDIO
            </text>
          </mask>
        </defs>
        <foreignObject width="100%" height="100%" mask="url(#text-mask)">
          <video className="video" autoPlay muted loop>
            <source src={g} type="video/mp4" />
          </video>
        </foreignObject>
      </svg>
      <Footer />
    </div>
    
  );
};

export default App;