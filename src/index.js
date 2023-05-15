import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const name = 'Orca Solutions';
const intro = 'IT & Software solutions';
const date = new Date();
const currentDate = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>{name}</h1>
    <h2>{intro}</h2>
    <h2>{currentDate + "." + currentMonth + "." + currentYear}</h2>
  </div>
);
