import React from 'react';
import './App.css';
import DatabaseList from './database/database-list/database-list';

const App: React.FC<{}> = () => {


  return (
    <div className="App">
      <DatabaseList></DatabaseList>
      <video></video>
    </div>
  );
}

export default App;
