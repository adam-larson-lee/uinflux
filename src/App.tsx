import React from 'react';
import './App.css';
import DatabaseList from './database/database-list/database-list';
import MeasurementList from './measurement/measurement-list/measurement-list';

const App: React.FC<{}> = () => {


  return (
    <div className="App">
      <div>
        <span>Databases:</span>
        <DatabaseList/>
        <span>Measurements:</span>
        <MeasurementList/>
      </div>
      <video></video>
    </div>
  );
}

export default App;
