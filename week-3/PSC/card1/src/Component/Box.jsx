import React from "react";
const style = {
  padding: 10,
  width: 15,
  fontSize: 14,
  margin: 5,
};

const Box = React.forwardRef(({ handleLetter, handleBack }, ref) => {
  const handle = (e) => {
    let k = e.keyCode;
    // k!=8
    if (k !== 8) handleLetter(e.target.value);
    //when user type any key other than backspace
    else handleBack(e.target.value); //when user type backspace
  };

  return (
    <div>
      <input
        type="text"
        ref={ref}
        maxLength={1}
        style={style}
        onKeyUp={handle}
      />
    </div>
  );
});

export default Box;
