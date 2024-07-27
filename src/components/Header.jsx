import { useEffect, useRef, useState } from "react";
import Navigator from "./Navigator";

export default function Header({ splashOnScreen, sectionRefs }) {
  const h1Ref = useRef();
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const h1Element = h1Ref.current;

    if (h1Element) {
      h1Element.classList.remove("animate", "animate-reverse");

      void h1Element.offsetWidth;

      if (initialLoad) {
        h1Element.classList.add('animate',"initial-animate");
        setTimeout(() => {
          h1Element.classList.remove("initial-animate");
          setInitialLoad(false);
        }, 3000);
      } else {
        if (splashOnScreen) {
          h1Element.classList.add("animate");
        } else {
          h1Element.classList.add("animate-reverse");
        }
      }
    }
  }, [splashOnScreen]);

  return (
    <header id="Header">
      <div>
        <h1 ref={h1Ref}>
          <div className="title-main ">Marco D</div>
          <span className="span-e ">e</span>
          <div className="title-L ">L</div>
          <span className="span-a ">a</span>
          <div className="title-C ">C</div>
          <span className="span-ruz ">ruz</span>
        </h1>
      </div>
      <Navigator sectionRefs={sectionRefs} />
    </header>
  );
}
