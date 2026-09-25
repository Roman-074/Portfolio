/**
 * Three sources at the corners of a triangle, cross-checked by the agent in
 * the middle. Lines are SVG; labels are HTML so they keep their type size.
 */
export function CrossCheck({
  title,
  sources,
  agent,
}: {
  title: string;
  sources: [string, string, string];
  agent: string;
}) {
  // Corners and centre in a 0–100 coordinate space shared by the SVG and the labels.
  const corners = [
    { x: 50, y: 10 },
    { x: 22, y: 86 },
    { x: 78, y: 86 },
  ];
  const centre = { x: 50, y: 58 };

  return (
    <div className="crosscheck" role="img" aria-label={`${title}: ${sources.join(", ")} checked against each other by the ${agent.toLowerCase()}`}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        <polygon
          className="crosscheck__edges"
          points={corners.map((c) => `${c.x},${c.y}`).join(" ")}
          vectorEffect="non-scaling-stroke"
        />
        {corners.map((c, i) => (
          <line
            className="crosscheck__spoke"
            key={i}
            x1={centre.x}
            y1={centre.y}
            x2={c.x}
            y2={c.y}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      {sources.map((source, i) => (
        <span
          className="crosscheck__source"
          key={source}
          style={{ left: `${corners[i].x}%`, top: `${corners[i].y}%` }}
        >
          {source}
        </span>
      ))}
      <span className="crosscheck__agent" style={{ left: `${centre.x}%`, top: `${centre.y}%` }}>
        {agent}
      </span>
    </div>
  );
}
