import React from 'react';
import s from './assets/s.mp4';
import './index.css'; // or './App.css' if that’s where your CSS is

const App = () => {
  return (
    <div className="video-text-container">
      <video autoPlay muted loop playsInline>
        <source src={s} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-mask">
        VIDEO
      </div>
    </div>
  );
};

export default App;
