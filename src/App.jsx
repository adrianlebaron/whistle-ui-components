import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import NavComponents from "./components/NavigationComponents/NavComponents";
import SimpleMobileSlideshow from "./components/Slideshows/SimpleMobileSlideshow";

function App() {
  return (
    <Router>
      <NavComponents>
        <Routes>
          <Route path="/" element={<DefaultVitePage />} />

          <Route
            path="/c/slideshows/simple-mobile-slideshow"
            element={<SimpleMobileSlideshow />}
          />
        </Routes>
      </NavComponents>
    </Router>
  );
}

export default App;

function DefaultVitePage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
        <div>:</div>
      </div>
    </>
  );
}
