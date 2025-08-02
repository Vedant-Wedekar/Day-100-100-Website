import React, { useState } from 'react';

const App = () => {
  const colors = ["#ff0000", "#00ff00", "#0000ff"];
  const [color, setColor] = useState(colors[0]); // fix 1

  function chngmode() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]; // fix 2
    setColor(randomColor); // fix 3
  }

  return (
    <div style={{ backgroundColor: color, height: "1000px", width: "1000px" }}>
      <button
        style={{ backgroundColor: "white", height: "100px", width: "100px" }}
        onClick={chngmode}
      >
        Click ME
      </button>
    </div>
  );
};

export default App;




  //  const randomColor = colors[Math.floor(Math.random() * colors.length)];