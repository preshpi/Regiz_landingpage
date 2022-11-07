import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'tw-elements';
import { ThemeProvider } from './darkmode/themeContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
  <ThemeProvider>
    <body className="transition-all overflow-hidden bg-[#fff] dark:bg-[#070909]">
      <App />    
    </body>
  </ThemeProvider>
 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
