import logo from "./icons/cygnus.png";
import "./App.css";
import React from "react";
import Feed from "./feed/Feed";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Spacetagram</h1>
        <p>
          A React picture feed from NASA's{" "}
          <a
            href="https://apod.nasa.gov/apod/"
            title="NASA's Astronomy Picture of the Day"
            style={{ color: "white" }}
          >
            Astronomy Picture of the Day
          </a>
          !
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"s
          rel="noopener noreferrer"
          >
          Learn React
        </a> */}
      </header>
      <Feed />
      <footer className="App-footer">
        <div>
          <a href="." style={{ color: "white" }}>
            Refresh Page
          </a>
        </div>
        <i>
          <div>
            Webpage made by{" "}
            <a
              href="https://siyi.dev"
              title="Personal Website"
              style={{ color: "white" }}
            >
              Bill Liu
            </a>{" "}
            found{" "}
            <a
              href="https://github.com/bill-lliu"
              title="GitHub Link"
              style={{ color: "white" }}
            >
              Here
            </a>
          </div>
          <div>
            Icons made by{" "}
            <a
              href="https://www.freepik.com"
              title="Freepik"
              style={{ color: "white" }}
            >
              Freepik
            </a>{" "}
            from{" "}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              style={{ color: "white" }}
            >
              www.flaticon.com
            </a>
          </div>
        </i>
      </footer>
    </div>
  );
}

export default App;
