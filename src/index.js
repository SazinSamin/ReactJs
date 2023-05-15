import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './componenets/Card';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='div'>
    <h1 className='header'>Todo App</h1>
    <Card />
    <Card />
  </div>
);
