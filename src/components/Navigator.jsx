import { useState, useEffect, useRef } from "react";

export default function Navigator({ sectionRefs }) {
  const [menuOpen, setMenuOpen] = useState({ opened: false, closing: false });
  const menuBtnRef = useRef(null);

  useEffect(() => {
    if (menuOpen.closing) {
      setTimeout(() => {
        setMenuOpen((menuOpen) => ({ ...menuOpen, closing: false }));
      }, 230);
    }
  }, [menuOpen.closing]);

  const handleClick = () => {
    menuBtnRef.current.disabled = true;
    if (menuOpen.opened) {
      setMenuOpen({ opened: false, closing: true });
    } else {
      setMenuOpen({ ...menuOpen, opened: true });
    }

    setTimeout(() => {
      menuBtnRef.current.disabled = false;
    }, 230);
  };

  return (
    <div id="Navi" className={menuOpen.opened ? "open" : ""}>
      <button onClick={handleClick} ref={menuBtnRef}>
        Menu
      </button>
      <Menu
        id="Menu"
        sectionRefs={sectionRefs}
        className={menuOpen.opened ? "open" : ""}
      />
      <Menu id="MenuClone" sectionRefs={sectionRefs} className={menuOpen.closing ? "closing" : ""} />
    </div>
  );
}

function Menu({ id, className, sectionRefs }) {

  const scrollToSection = (ref) => {
    if (ref) {
      ref.current.scrollIntoView({behavior:'smooth'});
    } else {
      window.scrollTo({top: 0, behavior: 'smooth'})
    }
  };

  return (
    <div id={id} className={className}>
      <a onClick={() => scrollToSection(sectionRefs.aboutMeRef)}>About Me</a>
      <hr />
      <a onClick={() => scrollToSection(sectionRefs.skillsRef)}>Skills</a>
      <hr />
      <a onClick={() => scrollToSection(sectionRefs.projectsRef)}>Projects</a>
      <hr />
      <a onClick={() => scrollToSection(sectionRefs.resumeRef)}>Resume</a>
      <hr />
      <a onClick={() => scrollToSection(sectionRefs.contactRef)}>Contact Me</a>
    </div>
  );
}
