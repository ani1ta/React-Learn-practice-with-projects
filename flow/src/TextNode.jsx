import { Handle, Position } from 'reactflow';
import ChartImg from './assets/chart1.jpg';

const TextNode = ({ data }) => {

  return (
    <div className="custom-node-container">
        <Handle type="target" position={Position.Left}  />
        <div className="custom-node">
            <div className="custom-node-header">
                <p>{data.label}</p>
            </div>
            <div className="custom-node-children">
                <img src={data.img} />
            </div>
        </div>
    </div>
  )
}

export default TextNode