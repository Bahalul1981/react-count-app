
import React, { useState } from 'react';

function App() {

  const[counter,setCounter]=useState(0)

  const incriment = () => {
    setCounter(counter + 2)
  }
  const dicriment = () => {
    setCounter(counter - 1)
  }

  const testfunction=()=>{
    return(
    <h1>CONGRATULATIONS</h1>
    )
  }




  return (
    <div className='mydiv'>
         <h1 className='header'>COUNT-APP</h1>
         <button className='plusbtn' onClick={incriment}>+</button>

         {/* WE CAN CHANGE CONDITION BY CLASS BASED CONDITION */}
         <spen className={counter<0? "counter-red":"counter"}>{counter}</spen>
         <button className='minus' onClick={dicriment}>-</button>



         {/* USING TAMPLATE OPARETOR: IF(?) ELSE (:) CONDITION */}
         <h3>
          {counter === 0 ? "zero" :(counter<0 ?"Your number less then zero":"Your number more then zero")}
           
         </h3>

         {/* WE CAN USE ALSO THIS. RESULT IS SAME */}
       <p>
         {counter===0&&(
           "CONGRATULATIONS YOU GOT THE RIGHT RESULT AND YOUR RESULT IS 0" 
         )}
       </p>

       <div>

         {counter === 10 && testfunction() }
         
      </div>


    </div>
    

  
  );
}

export default App;
