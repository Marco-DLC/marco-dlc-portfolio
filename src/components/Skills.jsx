export default function Skills({skillsRef}) {
  return (
    <div id="Skills" ref={skillsRef}>
      <div className="tech-skills">
        <h3>Developer Skills</h3>
        <SkillCard skillName="React" imgSrc="/react-logo.png" />
        <SkillCard skillName="Javascript" imgSrc="/javascript-logo.png" />
        <SkillCard skillName="HTML5" imgSrc="/html5-logo.png" />
        <SkillCard skillName="CSS3" imgSrc="/css3-logo.png" />
      </div>
      <div className="tools">
        <h3>Tools</h3>
        <SkillCard skillName="Vite" imgSrc="/vite-logo.svg" />
        <SkillCard skillName="Git" imgSrc="/git-logo.png" />
        <SkillCard skillName="Visual Studio Code" imgSrc="/vscode-logo.png" />
        <SkillCard skillName="Netlify" imgSrc="/netlify-logo.png" />
      </div>
    </div>
  );
}

function SkillCard({ imgSrc, skillName }) {
  return (
    <div className="skill-card fade-scale-in">
      <img src={imgSrc} />
      <p>{skillName}</p>
    </div>
  );
}
