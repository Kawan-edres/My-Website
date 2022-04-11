import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter } from "react-router-dom";

const root=document.getElementById('root');

const ReactRoot=ReactDOM.createRoot(root);

ReactRoot.render( 
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
  );

// ReactDOM.render(
//   <React.StrictMode>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

reportWebVitals();
