import React from "react";


interface props {
  text: string,
}


const Button: React.FC<props> = (props) => {
    const {text} = props
return (
    <button>{text}</button>
      
 )
}                

export default Button;