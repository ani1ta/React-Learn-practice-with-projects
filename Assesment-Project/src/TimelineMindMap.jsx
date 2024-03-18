/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, { MiniMap, Controls, Background, addEdge } from 'react-flow-renderer';
import { ResearchPhases, PlanningPhases, DesigningPhases, ManufacturingPhases, SalesPhases, B2CPhases, Edges } from './Phases';

const allPhases = [
  ...ResearchPhases,
  ...PlanningPhases,
  ...DesigningPhases,
  ...ManufacturingPhases,
  ...SalesPhases,
  ...B2CPhases,
];

function TimelineMindMap() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const allPhasesWithDefaultPosition = allPhases.map(phase => ({
      ...phase,
      position: phase.position || { x: 0, y: 0 }, // Add default position if position is undefined
    }));

    const mappedElements = allPhasesWithDefaultPosition.map(phase => ({
      id: phase.id,
      type: phase.type,
      data: phase.data,
      position: phase.position,
    }));

    // Add edges to the mapped elements
    const elementsWithEdges = [...mappedElements];
    Edges.forEach(edge => {
      elementsWithEdges.push({
        id: edge.id,
        source: edge.source,
        target: edge.target,
        type: 'smoothstep',
        animated: true,
        arrowHeadType: 'arrowclosed',
      });
    });

    setElements(elementsWithEdges);
  }, []); // Empty dependency array to run the effect only once

  const onConnect = useCallback(
    (params) => {
      setElements((els) => {
        const newElements = addEdge(params, els);
        return newElements.filter(el => el.source || el.target); // Remove elements without source or target (i.e., edges)
      });
    },
    [setElements]
  );

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <ReactFlow elements={elements} onConnect={onConnect}>
        <MiniMap />
        <Controls />
        <Background />
        {elements.map(el => (
          <div key={el.id} style={{ position: 'absolute', left: el.position?.y, top: el.position?.x, backgroundColor: 'red', padding: '4px' }}>
            {el.data?.label}
          </div>
        ))}


      </ReactFlow>
    </div>
  );
}

export default TimelineMindMap;
