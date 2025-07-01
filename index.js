import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
 // ✅ Only needed if you're styling things
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
