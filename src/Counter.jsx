//updater function = a function passed as an argument to setState() usually
//                  ex.setYear(arrow function)
//                  Allow for safe updates based on the previous state
//                  Used with multiple state updates and synchronous function
//                  Good Practise to use update functions.


import React, {useState} from 'react';
function Counter(){

    const [count, setCount] = useState(0);

    function increment(){
        setCount( c => c +1);
        setCount( c => c +1);
        setCount( c => c +1);

    };

    function decrement(){
        setCount( c => c -1);

    };
    
    const reset = () =>{setCount(0);}

    return(<div className='counter-container'>
        <p className='count-display'>{count}</p>
        <button className='counter-button' onClick={decrement}>Decrement</button>
        <button className='counter-button' onClick={reset}>Reset</button>
        <button className='counter-button' onClick={increment}>Increment</button>
    </div>);
}

export default Counter;