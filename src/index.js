import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import FortuneAppProvider from './Context/FortuneContext';




ReactDOM.render(
  
  <React.StrictMode>
    <FortuneAppProvider>
    <App />
    </FortuneAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

