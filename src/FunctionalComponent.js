import React, { useEffect, useState } from 'react'

const FunctionalComponent = () => {
    const [counter, setCounter]=useState(0);
    //const [isVisible, seIstVisible]= useState(false);

    useEffect(()=>{
        console.log('useEffect');
    }, [counter]);

    console.log('Functional Component', counter);
    const Increase=()=>{
        setCounter(counter + 1);
    }
    return (
    <>
        <h2>Functional Component</h2>
        <p>Counter : {counter}</p>
        <button onClick={()=>Increase()}>Increase</button>
    </>
  )
}

export default FunctionalComponent