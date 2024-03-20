import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import { nodeColor } from './Phases';
// import chart4 from './images/chart4.png'
import chart1 from './images/chart1.jpg'
 
const handleStyle = { left: 10 };
 
export default function TextUpdaterNode(prop) {

    console.log({ prop })

 
  return (
    <div style={{ backgroundColor: nodeColor({ category: 'research' }) ,  border:'none', position: 'relative' } }>
      <Handle type="target" position={Position.Left} />
      <div>{prop.data.label}</div>
      <div style={{  position: 'absolute', background: 'white', top: '100%', left: '50%', transform: 'translateX(-50%)', maxWidth: '300px', zIndex: 10000 }}>
        <img  src={chart1} alt="Chart 1" />

      </div>
    </div>
  );
}