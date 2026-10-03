function StockViz() {
  const heights = [38, 70, 52, 85, 30, 60, 46];
  return (
    <div className="viz-stock">
      {heights.map((h, i) => (
        <i key={i} style={{ height: `${h}%` }}></i>
      ))}
    </div>
  );
}

function CalViz() {
  const on = new Set([1, 4, 9, 12]);
  return (
    <div className="viz-cal">
      {Array.from({ length: 14 }).map((_, i) => (
        <i key={i} className={on.has(i) ? 'on' : ''}></i>
      ))}
    </div>
  );
}

function DashViz() {
  return (
    <div className="viz-dash">
      <div className="big">
        <i style={{ height: '40%' }}></i>
        <i style={{ height: '70%' }}></i>
        <i style={{ height: '55%' }}></i>
      </div>
      <div className="sm"></div>
      <div className="sm"></div>
    </div>
  );
}

const VISUALS = { stock: StockViz, cal: CalViz, dash: DashViz };

export default function ProjectCard({ project }) {
  const Viz = VISUALS[project.visual];
  return (
    <article className="project">
      <div className="project-visual">
        <span className="project-tag">Démo</span>
        <Viz />
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <div className="project-meta">
          <div><b>Besoin</b> — {project.besoin}</div>
          <div><b>Solution</b> — {project.solution}</div>
        </div>
      </div>
    </article>
  );
}
