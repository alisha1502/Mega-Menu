import "./App.css";
import React from "react";
import MegaMenu from "./components/MegaMenu";
import { BrowserRouter } from "react-router-dom";
import RoutesFile from "./components/RoutesFile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RoutesFile />
        <MegaMenu />
      </div>
    </BrowserRouter>
  );
}

export default App;
