import React from 'react'

type ButtonProps={
    text:string;
    handleClick?:()=>void;  // void means return nothing
}

// interface ButtonProps{
//     text:string;
//     handleClick?:()=>void;
// }

// here we can write interface or type 

const Button = (props:ButtonProps) => {
    const {text,handleClick}=props;
  return (
    <div>
        <button onClick={()=>handleClick && handleClick()}>{text}</button>
    </div>
  )
}

export default Button