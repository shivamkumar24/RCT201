import { useState } from "react";
import "./App.css";
import InputBox from "./Component/InputBox";

function App() {
  const [otp, setOtp] = useState("");
  return (
    <div className="App">
      <InputBox length={6} handleOtp={(val) => setOtp(val)} />
      <h1>{otp}</h1>
    </div>
  );
}

export default App;
