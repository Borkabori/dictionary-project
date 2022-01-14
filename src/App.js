import stareyes from "./pictures/stareyes.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          Coded by Borbála Birgés{" "}
          <a
            href="https://github.com/Borkabori/dictionary-project"
            target="blank"
          >
            open-sourced on gitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
