import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Splash from "./components/Splash.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Resume from "./components/Resume.jsx";
import ContactMe from "./components/ContactMe.jsx";

function App() {
  const splashRef = useRef();
  const [splashOnScreen, setSplashOnScreen] = useState(true);

  const sectionRefs = {
    aboutMeRef: useRef(null),
    skillsRef: useRef(null),
    projectsRef: useRef(null),
    resumeRef: useRef(null),
    contactRef: useRef(null),
  };

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
      <Header splashOnScreen={splashOnScreen} sectionRefs={sectionRefs} />
      <Splash splashRef={splashRef} />
      <AboutMe aboutMeRef={sectionRefs.aboutMeRef} />
      <Skills skillsRef={sectionRefs.skillsRef} />
      <Projects projectsRef={sectionRefs.projectsRef} />
      <div id="bottom-section-container">
      <Resume resumeRef={sectionRefs.resumeRef} />
      <ContactMe contactRef={sectionRefs.contactRef} />
      </div>
      <div id="footer">
        <span>&copy; 2024 Marco De La Cruz</span>
        <a
          href="https://github.com/Marco-DLC"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img src="/github-icon.png" />
        </a>
      </div>
    </div>
  );
}

export default App;
