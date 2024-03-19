/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from 'react';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';
import { phaseEdges, phases } from './Phases';
import chart1 from './chart1.jpg'
import chart2 from './chart2.jpg'
import chart3 from './chart3.png'
import chart4 from './chart4.png'
import TextUpdaterNode from './CustomNode';

const App = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  const nodeTypes = useMemo(() => ({ hoverableNode: TextUpdaterNode }), []);

  const handleNodeHover = (event, element) => {
    console.log(element)
    if (element && ['Online', 'Interview', 'Public Data', 'Health'].includes(element.data.label)) {
      console.log('Hovering over:', element.data.label);
      setHoveredNode(element);
    } else {
      console.log('Not hovering over a valid node');
      setHoveredNode(null);
    }
  };

  console.log({ hoveredNode })

  let chart = null;
  if (hoveredNode?.data?.label === 'Online') {
    chart = <img src={chart1} alt="Chart 1" />;
  } else if (hoveredNode?.data?.label === 'Interview') {
    chart = <img src={chart2} alt="Chart 2" />;
  } else if (hoveredNode?.data?.label === 'Public Data') {
    chart = <img src={chart3} alt="Chart 3" />;
  } else if (hoveredNode?.data?.label === 'Health') {
    chart = <img src={chart4} alt="Chart 4" />;
  }

  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <ReactFlow
        nodes={phases}
        nodeTypes={nodeTypes}
        fitView
        edges={phaseEdges}
        onNodeMouseEnter={handleNodeHover}
        onNodeMouseLeave={(e) => {
          console.log("leave mouse", e)
          setHoveredNode(null)
        }}
      />
      {(chart || true) && (
         <div className="chart-container" style={{ transform: `translate(${hoveredNode?.position.x || 1050}px, ${hoveredNode?.position.y || 550}px)` }}>
          {/* Display the selected chart */}
          {chart}
        </div>
      )}
    </div>
  );
};


export default App;
