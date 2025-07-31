import React from 'react'

const App = () => {

  function handleclick()
  {
    
    alert("Hey Anushka");


  }
  function handhower()
  {
    alert("Hey user");
  }
  return (
    <div>
      
      <button onClick={handleclick}>Click Me!</button>
      <button onMouseOver={handhower}>Click</button>
    </div>
  )
}

export default App
