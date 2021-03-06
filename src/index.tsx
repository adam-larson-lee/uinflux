import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import databaseReducer from './database/database-reducer/database-reducer';
import measurementReducer from './measurement/measurement-reducer/measurement-reducer';
import pointReducer from './point/point-reducer/point-reducer';

const rootReducer = combineReducers({
  database: databaseReducer,
  measurement: measurementReducer,
  point: pointReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
