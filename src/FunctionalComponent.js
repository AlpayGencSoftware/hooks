import React, { useEffect, useState } from 'react'

const FunctionalComponent = () => {
    const [counter, setCounter]=useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    //const [isVisible, seIstVisible]= useState(false);

    useEffect(()=>{
        console.log('useEffect');
    }, [counter, counterTwo]);

    console.log('Functional Component', counter);
    const Increase=()=>{
        setCounter(counter + 1);
    }
    return (
    <>
        <h2>Functional Component</h2>
        <p>Counter : {counter}</p>
        <p>Counter : {counterTwo}</p>
        <button onClick={()=>Increase()}>Increase</button>
        <button onClick={()=>setCounterTwo(counterTwo+1)}>Increase Counter</button>
    </>
  )
}

export default FunctionalComponent