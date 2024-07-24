import Navigator from "./Navigator";

export default function Header({ splashOnScreen }) {
  return (
    <header id="Header">
      <div>
        <h1 className={splashOnScreen ? "expanded" : "condensed"}>
          <div className="title-main ">Marco D</div>
          <span className="span-e ">e</span>
          <div className="title-L ">L</div>
          <span className="span-a ">a</span>
          <div className="title-C ">C</div>
          <span className="span-ruz ">ruz</span>
        </h1>
      </div>
      <Navigator />
    </header>
  );
}
