import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import { nodeColor } from './Phases';
import chart4 from './chart4.png'
 
const handleStyle = { left: 10 };
 
export default function TextUpdaterNode(prop) {

    console.log({ prop })

 
  return (
    <div style={{ backgroundColor: 'red',  border:'none', position: 'relative' } }>
      <Handle type="target" position={Position.Left} />
      <div>{prop.data.label}</div>
      <div style={{ position: 'absolute', background: "white", top: 10, left: '50%', maxWidth: '300px', zIndex: 10000 }}>
      <img  src={chart4} alt="Chart 4" />;

      </div>
    </div>
  );
}