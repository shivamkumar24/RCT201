import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;

/*
axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`)
*/
