import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Splash from "./components/Splash.jsx";

function App() {
  return (
    <div id="App">
      <Header />
      <Splash />
    </div>
  );
}

export default App;
