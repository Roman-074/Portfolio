import type { FlowLayer } from "../../content/types";

/** Top-to-bottom architecture diagram: each layer is a row of nodes, joined by a spine. */
export function LayerFlow({ title, layers }: { title: string; layers: FlowLayer[] }) {
  return (
    <ol className="layer-flow" aria-label={title}>
      {layers.map((layer) => (
        <li className={layer.accent ? "layer layer--accent" : "layer"} key={layer.label}>
          <span className="layer__label">{layer.label}</span>
          <ul className="layer__nodes">
            {layer.nodes.map((node) => (
              <li className="node" key={node}>
                {node}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
