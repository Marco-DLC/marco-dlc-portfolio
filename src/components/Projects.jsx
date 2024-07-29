export default function Projects({ projectsRef }) {
  const yerryWrightProj = {
    title: "Yeremiya Wright",
    subtitle: "Portfolio for a NYC Jazz Vocalist",
    imgUrl:
      "https://github.com/Marco-DLC/yeremiya-wright-vocalist/raw/main/public/yeremiyawright-screenshot01.png",
    siteUrl: "https://yerrywright.netlify.app/",
    notice:
      "I'm still waiting for client's resumes and bio. This is why the resume buttons do nothing and the \"About Me\" contains dummy text.",
    githubUrl: "https://github.com/Marco-DLC/yeremiya-wright-vocalist",
    tech: "Vite + React",
  };

  const grimeyLimesProj = {
    title: "grimey.limes",
    subtitle: "Portfolio for an Online Digital Artist",
    imgUrl:
      "https://github.com/Marco-DLC/grimeylimes/raw/main/images/grimeylimes-screenshot02.png",
    siteUrl: "https://marco-dlc.github.io/grimeylimes/",
    githubUrl: "https://github.com/Marco-DLC/grimeylimes",
    tech: "HTML + Javascript",
  };

  const espersWorldProj = {
    title: "Esper's World",
    subtitle: "Note-taking App Stylized to a Friend's Liking",
    imgUrl:
      "https://github.com/Marco-DLC/espers-world/raw/main/public/images/espers-world-screenshot.png",
    siteUrl: "https://espersworld.netlify.app/",
    githubUrl: "https://github.com/Marco-DLC/espers-world?tab=readme-ov-file",
    tech: "Vite + React",
  };

  return (
    <div>
      <div id="Projects" ref={projectsRef}>
        <h2>My Work</h2>
        <div className="container">
          <Card project={yerryWrightProj} />
          <Card project={grimeyLimesProj} />
          <Card project={espersWorldProj} />
        </div>
      </div>
    </div>
  );
}

function Card({ project }) {
  const { title, subtitle, imgUrl, siteUrl, notice, githubUrl, tech } = project;

  return (
    <div className="Card fade-in-children">
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <hr />
      <p className="tech">
        Made with <span>{tech}</span>
      </p>
      <img src={imgUrl} />
      {notice && (
        <p>
          <strong>Notice </strong>
          {notice}
        </p>
      )}
      <div>
        <a href={siteUrl} target="_blank">
          <button className="site">Live Site</button>
        </a>
        <a href={githubUrl} target="_blank">
          <button>Source Code</button>
        </a>
      </div>
    </div>
  );
}
