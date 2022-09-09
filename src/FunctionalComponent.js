import React, { useState } from 'react'

const FunctionalComponent = () => {
    const [counter, setCounter]=useState(0);
    //const [isVisible, seIstVisible]= useState(false);

    console.log('Functional Component', counter);
    const Increase=()=>{
        setCounter(counter + 1);
    }
    return (
    <div className='box'>
        <h2>Functional Component</h2>
        <p>Counter : {counter}</p>
        <button onClick={()=>Increase()}>Increase</button>
    </div>
  )
}

export default FunctionalComponent