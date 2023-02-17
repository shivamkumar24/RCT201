import React, { useEffect, useRef, useState } from "react";

const useStopwatch = () => {
  const [time, setTime] = useState(0);
  const timerId = useRef(null);

  const start = () => {
    if (!timerId.current) {
      timerId.current = setInterval(() => {
        setTime((prevValue) => prevValue + 1);
      }, 1000);
    }
  };

  const pause = () => {
    clearInterval(timerId.current);
    timerId.current = null;
  };

  const reset = () => {
    clearInterval(timerId.current);
    timerId.current = null;
    setTime(0);
  };

  const addSeconds = (count) => {
    setTime((prevValue) => prevValue + count);
  };

  useEffect(() => {
    return reset;
  }, []);

  return { time, start, pause, reset, addSeconds };
};

export default useStopwatch;
