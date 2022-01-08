import stareyes from "./pictures/stareyes.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={stareyes} className="stareyes-logo" alt="stareyes" />
          <a href="#" className="btn btn-dark">
            {" "}
            Hello{" "}
          </a>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">Coded by Borbála Birgés</footer>
      </div>
    </div>
  );
}
