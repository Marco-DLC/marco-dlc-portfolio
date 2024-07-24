import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Splash from "./components/Splash.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";

function App() {
  const splashRef = useRef();
  const [splashOnScreen, setSplashOnScreen] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setSplashOnScreen(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.25,
      }
    );
    observer.observe(splashRef.current);
  }, []);

  return (
    <div id="App">
      <Header splashOnScreen={splashOnScreen} />
      <Splash splashRef={splashRef} />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
