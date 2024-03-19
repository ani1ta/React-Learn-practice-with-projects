/* eslint-disable no-unused-vars */
import React from 'react';
import { ReactFlowProvider } from 'reactflow';
// import MainComponent from './MainComponent';
// import TimelineMindMap from './TimelineMindMap'
import Flow from './Flow'

function App() {
  return (
    <ReactFlowProvider>
      {/* <div className="main-container">
        <TimelineMindMap />
    </div> */}
      <Flow />
    </ReactFlowProvider>
  );
}

export default App;
