/* eslint-disable no-unused-vars */
import React from 'react';
import {ReactFlow, Position} from 'reactflow';

export const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,

};

export const nodeColor = (node) => {
  switch (node.category) {
    case 'research':
      return '#023e8a';
    case 'planning':
      return '#8ecae6';
    case 'Designing':
      return '#e76f51';
    case 'manufacturing':
      return '#ffafcc';
    case 'sales':
      return '#b388eb';
    default:
      return '#ff0072';
  }
};

export const phases = [
  // first connected node
  {id: '0',
  position: { y: 900, x: -400 },
  type: 'custom',
  data: {},
  style: {
    border: '1px solid #ccc',
    borderRadius: '50%',
    width: 30,
    height: 30,
    background: '#f0f0f0' }, ...nodeDefaults,
    targetPosition: Position.Right,
   },

  // Research phase
  { id: '1', category: 'research', data: { label: 'Research' }, position: { y: 580, x: 5 }, ...nodeDefaults,  style: { backgroundColor: nodeColor({ category: 'research' }) , color: 'white', border:'none'}},
  { id: '2', category: 'research', data: { label: 'External' }, position: { y: 520, x: 350 }, ...nodeDefaults,  style: { backgroundColor: nodeColor({ category: 'research' }), color: 'white', border:'none' }  },
  { id: '3', category: 'research', data: { label: 'Internal' }, position: { y: 620, x: 350 }, ...nodeDefaults, sourcePosition: Position.Left,  style: { backgroundColor: nodeColor({ category: 'research' }), color: 'white', border:'none' }},

  // Planning Phase
  { id: '4', category: 'planning', data: { label: 'Planning' }, position: { y: 720, x: 5 }, ...nodeDefaults, style: { backgroundColor: nodeColor({ category: 'planning' }), border:'none' }  },
  { id: '5', category: 'planning', data: { label: 'PRD' }, position: { y: 670, x: 350 }, ...nodeDefaults, sourcePosition: Position.Left, style: { backgroundColor: nodeColor({ category: 'planning' }), border:'none' }  },
  { id: '6', category: 'planning', data: { label: 'Specs' }, position: { y: 780, x: 350 }, ...nodeDefaults, sourcePosition: Position.Left, style: { backgroundColor: nodeColor({ category: 'planning' }), border:'none' }  },

  // Designing Phase
  { id: '7', category: 'designing', data: { label: 'Designing' }, position: { y: 900, x: 5 }, ...nodeDefaults, style: { backgroundColor: nodeColor({ category: 'Designing' }), border:'none' }  },
  { id: '8', category: 'designing', data: { label: 'Hardware' }, position: { y: 840, x: 350 }, ...nodeDefaults, sourcePosition: Position.Left, style: { backgroundColor: nodeColor({ category: 'Designing' }), border:'none' }  },
  { id: '9', category: 'designing', data: { label: 'Software' }, position: { y: 970, x: 350 }, ...nodeDefaults, sourcePosition: Position.Left, style: { backgroundColor: nodeColor({ category: 'Designing' }), border:'none' }  },

  // Manufacturing Phase
  { id: '10', category: 'manufacturing', data: { label: 'Manufacturing' }, position: { y: 1100, x: 5 }, ...nodeDefaults, style: { backgroundColor: nodeColor({ category: 'manufacturing' }), border:'none' }  },
  { id: '11', category: 'manufacturing', data: { label: 'Material' }, position: { y: 1030, x: 350 }, ...nodeDefaults, sourcePosition: Position.Left, style: { backgroundColor: nodeColor({ category: 'manufacturing' }), border:'none' }  },
  { id: '12', category: 'manufacturing', data: { label: 'Production' }, position: { y: 1150, x: 350 }, ...nodeDefaults, sourcePosition: Position.Left, style: { backgroundColor: nodeColor({ category: 'manufacturing' }), border:'none' }  },

  // Sales Phase
  { id: '13', category: 'sales', data: { label: 'Sales/Marketing' }, position: { y: 1250, x: 5 }, ...nodeDefaults, style: { backgroundColor: nodeColor({ category: 'sales' }), border:'none' }  },
  { id: '14', category: 'sales', data: { label: 'Online' },  position: { y: 1200, x: 350 }, ...nodeDefaults, sourcePosition: Position.Left, style: { backgroundColor: nodeColor({ category: 'sales' }), border:'none' }  },
  { id: '15', category: 'sales', data: { label: 'DealerShip' }, position: { y: 1300, x: 350 }, ...nodeDefaults, sourcePosition: Position.Left, style: { backgroundColor: nodeColor({ category: 'sales' }), border:'none' }  },

  // B2C Phase
  { id: '16', category: 'research', data: { label: 'B2C' }, position: { y: 440, x: 750 }, ...nodeDefaults,style: { backgroundColor: nodeColor({ category: 'research' }), color: 'white', border:'none' }  },
  { id: '21', category: 'research', data: { label: 'B2C' }, position: { y: 600, x: 750 }, ...nodeDefaults, sourcePosition: Position.Left, style: { backgroundColor: nodeColor({ category: 'research' }), color: 'white', border:'none' }  },
  { id: '17', category: 'research', type: 'hoverableNode', data: { label: 'Online' }, position: { y: 350, x: 1050 }, ...nodeDefaults, sourcePosition: Position.Left, style: { backgroundColor: nodeColor({ category: 'research' }), color: 'white', border:'none' }  }, 
  { id: '18', category: 'research', data: { label: 'Interview' }, position: { y: 420, x: 1050 }, ...nodeDefaults, sourcePosition: Position.Left, style: { backgroundColor: nodeColor({ category: 'research' }), color: 'white', border:'none' }  },
  { id: '19', category: 'research', data: { label: 'Public Data' }, position: { y: 480, x: 1050 }, ...nodeDefaults, sourcePosition: Position.Left, style: { backgroundColor: nodeColor({ category: 'research' }), color: 'white', border:'none' }  },
  { id: '20', category: 'research', data: { label: 'Health' }, position: { y: 550, x: 1050 }, ...nodeDefaults, sourcePosition: Position.Left, style: { backgroundColor: nodeColor({ category: 'research' }), color: 'white', border:'none' }  },
];



export const phaseEdges = [
  // parent node
  {id: 'e0-1', source : '0', target :'1'},
  {id: 'e0-4', source : '0', target :'4'},
  {id: 'e0-7', source : '0', target :'7'},
  {id: 'e0-10', source : '0', target :'10'},
  {id: 'e0-13', source : '0', target :'13'},

  // Research Phase Edges
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e2-16', source: '2', target: '16' },
  { id: 'e2-21', source: '2', target: '21' },

  // Planning Phase Edges
  { id: 'e4-5', source: '4', target: '5' },
  { id: 'e4-6', source: '4', target: '6' },

  // Designing Phase Edges
  { id: 'e7-8', source: '7', target: '8' },
  { id: 'e7-9', source: '7', target: '9' },

  // Manufacturing Phase Edges
  { id: 'e10-11', source: '10', target: '11' },
  { id: 'e10-12', source: '10', target: '12' },

  // Sales/Marketing Phase Edges
  { id: 'e13-14', source: '13', target: '14' },
  { id: 'e13-15', source: '13', target: '15' },

  // B2C Phase Edges
  { id: 'e16-17', source: '16', target: '17' },
  { id: 'e16-18', source: '16', target: '18' },
  { id: 'e16-19', source: '16', target: '19' },
  { id: 'e16-20', source: '16', target: '20' },

  // Add more edges as needed
];
