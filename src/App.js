import React from "react";
import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"> Dictionary App</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/rhogarth91"
              target="_blank"
              rel="noreferrer"
            >
              Rose H{" "}
            </a>{" "}
            🌹 and is
            <a
              href="https://github.com/rhogarth91/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              open-sourced on GitHub{" "}
            </a>
            and{" "}
            <a
              href="https://rh-react-dictionary-app.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
