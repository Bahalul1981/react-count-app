
import React, { useState } from 'react';

function App() {

  const[counter,setCounter]=useState(0)

  const incriment = () => {
    setCounter(counter + 1)
  }
  const dicriment = () => {
    setCounter(counter - 1)
  }


  return (
    <div className='mydiv'>
         <h1 className='header'>COUNT-APP</h1>

         <button className='plusbtn' onClick={incriment}>+</button>
         <spen className="counter">{counter}</spen>
         <button className='minus' onClick={dicriment}>-</button>
    </div>

  
  );
}

export default App;
