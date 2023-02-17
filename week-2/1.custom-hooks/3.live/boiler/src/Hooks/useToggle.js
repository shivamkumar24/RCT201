import React, { useState } from "react";

const useToggle = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => {
    setValue(!value);
  };
  return [value, toggleValue];
};

export default useToggle;
