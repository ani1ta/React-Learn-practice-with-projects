import { ReactFlowProvider } from "reactflow"
import { Flow } from "./Flow"

function App() {

  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  )
}

export default App
