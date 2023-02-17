import "./App.css";
import Counter from "./Components/Counter/Counter";
import Todo from "./Components/Todo/Todo";

function App() {
  return (
    <div className="App">
      <h1>Redux with React</h1>
      <Counter />
      <br />
      <br />
      <Todo />
    </div>
  );
}

export default App;
