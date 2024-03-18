/* eslint-disable no-unused-vars */
import React from 'react';
import { ReactFlowProvider } from 'react-flow-renderer';
// import MainComponent from './MainComponent';
import TimelineMindMap from './TimelineMindMap'

function App() {
  return (
    <ReactFlowProvider>
      <div className="main-container">
        <TimelineMindMap />
    </div>
    </ReactFlowProvider>
  );
}

export default App;
