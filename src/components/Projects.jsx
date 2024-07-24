export default function Projects() {
  const yerryWrightProj = {
    title: "Yeremiya Wright",
    subtitle: "Portfolio for a NYC Jazz Vocalist",
    imgUrl:
      "https://github.com/Marco-DLC/yeremiya-wright-vocalist/raw/main/public/yeremiyawright-screenshot01.png",
    siteUrl: "https://yerrywright.netlify.app/",
    notice: "I'm still waiting for client's resumes and bio. This is why the resume buttons do nothing and the \"About Me\" contains dummy text.",
    githubUrl: 'https://github.com/Marco-DLC/yeremiya-wright-vocalist',
    tech: 'Vite + React',
  };

  return (
    <div id="Projects">
      <h2>My Work</h2>
      <div className="container">
        <Card project={yerryWrightProj} />
      </div>
    </div>
  );
}

function Card({ project }) {
  const { title, subtitle, imgUrl, siteUrl, notice, githubUrl, tech } = project;

  return (
    <div className="Card">
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <hr />
      <p>Made with <span>{tech}</span></p>
      <img src={imgUrl} />
      {notice && <p><strong>Notice: </strong>{notice}</p> }
      <div>
      <a href={siteUrl}>
        <button>Live Site</button>
      </a>
      <a href={githubUrl}>
        <button>Source Code</button>
      </a>
      </div>
    </div>
  );
}
