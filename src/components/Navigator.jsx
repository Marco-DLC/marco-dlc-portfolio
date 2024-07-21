import { useState, useEffect, useRef } from "react";

export default function Navigator() {
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
      <Menu id="Menu" className={menuOpen.opened ? "open" : ""} />
      <Menu id="MenuClone" className={menuOpen.closing ? "closing" : ""} />
    </div>
  );
}

function Menu({ id, className }) {
  return (
    <div id={id} className={className}>
      <a>About Me</a>
      <hr />
      <a>Projects</a>
      <hr />
      <a>Resume</a>
      <hr />
      <a>Contact Me</a>
    </div>
  );
}
