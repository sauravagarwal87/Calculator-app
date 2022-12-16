import logo from "./logo.svg";
import "./App.css";
import Display from "./components/Display";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
        <Display />
      </header>
    </div>
  );
}

export default App;
