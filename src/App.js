import stareyes from "./pictures/stareyes.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={stareyes} className="stareyes-logo" alt="stareyes" />
        <a href="#" className="btn btn-dark">
          {" "}
          Hello{" "}
        </a>
      </header>
    </div>
  );
}
