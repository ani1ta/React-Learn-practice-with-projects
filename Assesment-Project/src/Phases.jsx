// Phases.jsx
export const ResearchPhases = [
    { id: '1', type: 'input', data: { label: 'Research' }, position: { x: 250, y: 5 } },
    { id: '2', type: 'default', data: { label: 'External' }, position: { x: 150, y: 150 } },
    { id: '3', type: 'default', data: { label: 'Internal' }, position: { x: 350, y: 150 } },
  ];
  
  export const PlanningPhases = [
    { id: '4', type: 'default', data: { label: 'Planning' }, position: { x: 250, y: 300 } },
    { id: '5', type: 'default', data: { label: 'PRD' }, position: { x: 150, y: 450 } },
    { id: '6', type: 'default', data: { label: 'Specs' }, position: { x: 350, y: 450 } },
  ];
  
  // Define DesigningPhases, ManufacturingPhases, SalesPhases, and B2CPhases similarly
  
  export const DesigningPhases = [
    { id: '7', type: 'default', data: { label: 'Designing' }, position: { x: 450, y: 5 } },
    { id: '8', type: 'default', data: { label: 'Hardware' }, position: { x: 350, y: 150 } },
    { id: '9', type: 'default', data: { label: 'Software' }, position: { x: 550, y: 150 } },
  ];
  
  export const ManufacturingPhases = [
    { id: '10', type: 'default', data: { label: 'Manufacturing' }, position: { x: 450, y: 300 } },
    { id: '11', type: 'default', data: { label: 'Material' }, position: { x: 350, y: 450 } },
    { id: '12', type: 'default', data: { label: 'Production' }, position: { x: 550, y: 450 } },
  ];
  
  export const SalesPhases = [
    { id: '13', type: 'default', data: { label: 'Sales/Marketing' }, position: { x: 650, y: 5 } },
    { id: '14', type: 'default', data: { label: 'Online' }, position: { x: 550, y: 150 } },
    { id: '15', type: 'default', data: { label: 'DealerShip' }, position: { x: 750, y: 150 } },
  ];
  
  export const B2CPhases = [
    { id: '16', type: 'default', data: { label: 'B2C' }, position: { x: 750, y: 300 } },
    { id: '17', type: 'default', data: { label: 'Online' }, position: { x: 650, y: 450 } },
    { id: '18', type: 'default', data: { label: 'Interview' }, position: { x: 850, y: 450 } },
    { id: '19', type: 'default', data: { label: 'Public Data' }, position: { x: 1050, y: 450 } },
    { id: '20', type: 'default', data: { label: 'Health' }, position: { x: 1250, y: 450 } },
  ];
  
  export const Edges = [
    // Research Phase Edges
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e1-3', source: '1', target: '3' },
  
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
  