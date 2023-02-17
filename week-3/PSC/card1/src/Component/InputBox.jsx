import React, { useEffect, useRef, useState } from "react";
import Box from "./Box";

const InputBox = ({ length, handleOtp }) => {
  const [val, setVal] = useState(new Array(length).fill("")); //["","","",""]
  const elements = useRef(new Array(length).fill("")); //["","","",""]

  const manage = (e, i) => {
    let h = [...val]; //["","","",""]
    h[i] = e; //["",7,"",""]
    setVal(h);
    if (i < length - 1) elements.current[i + 1].focus();
    handleOtp(h.join(""));
  };

  const manageBack = (e, i) => {
    let h = [...val]; //["","","",""]
    h[i] = e; //[5,7,6,""]
    setVal(h);
    if (i > 0) elements.current[i - 1].focus();
    handleOtp(h.join(""));
  };

  const handlePaste = (e) => {
    e.preventDefault();
    let k = e.clipboardData.getData("Text");
    let h = k.split("").slice(0, length);
    h.forEach((e, i) => {
      elements.current[i].value = e;
      val[i] = e;
      if (i < length - 1) elements.current[i + 1].focus();
    });
  };

  return (
    <div style={{ display: "flex" }} onPaste={handlePaste}>
      {val.map((e, i) => (
        <Box
          key={i}
          handleLetter={(e) => {
            manage(e, i);
          }}
          ref={(b) => (elements.current[i] = b)}
          handleBack={(e) => {
            manageBack(e, i);
          }}
        />
      ))}
    </div>
  );
};

export default InputBox;

// maxLength
// onKeyUp
// React.forwardRef
// keyCode
// callback Ref
// event bubbling
