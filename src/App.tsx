import React from 'react';
import './App.css';
import PointLoader from './point/point-loader/point-loader';
import DatabaseLoader from './database/database-loader/database-loader';
import MeasurementLoader from './measurement/measurement-loader/measurement-loader';

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <div>
        <span><b>Databases:</b></span>
        <DatabaseLoader/>
        <br/>
        <span><b>Measurements:</b></span>
        <MeasurementLoader/>
        <br/>
        <span><b>Points:</b></span>
        <PointLoader/>
      </div>
      <video></video>
    </div>
  );
}

export default App;
