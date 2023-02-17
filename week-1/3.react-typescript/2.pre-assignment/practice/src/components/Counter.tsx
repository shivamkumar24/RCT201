import React, { useState } from 'react'
import Button from './Button';

const Counter = () => {
    const [count,setCount]=useState<number>(0);   // here we pass the types on useState that is called generics
  return (
    <div>
        <h1>Counter: {count}</h1>
        <div>
            <Button text='Add' handleClick={()=>setCount(count+1)}/>
            <Button text='Sub' handleClick={()=>setCount(count-1)}/>
        </div>
    </div>
  )
}

export default Counter