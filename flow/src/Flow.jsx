import ReactFlow, { Background, Controls, MiniMap, applyNodeChanges } from "reactflow";
import "reactflow/dist/style.css";
import TextNode from "./TextNode";
import { useCallback, useState } from "react";
import { phaseEdges, phases } from "./Phases";

const nodeTypes = { CustomNode: TextNode };


export const Flow = () => {
  const [nodes, setNodes] = useState(phases);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  return (
    <div className="container">
      <ReactFlow
        onNodesChange={onNodesChange}
        nodeTypes={nodeTypes}
        edges={phaseEdges}
        fitView
        nodes={nodes}
      >
        <Background />
        <MiniMap />
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  );
};
