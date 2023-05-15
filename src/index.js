import React from 'react';
import ReactDOM from 'react-dom/client';

const date = new Date();

const appName = "Todo App";
const cardName = "Learn React";
const cardDesc = "React is frontend development framework";
const cardDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;


// Functional Component
function Card() {
  return <div className='card'>
    <h2>{cardName}</h2>
    <h3>{cardDesc}</h3>
    <footer>{cardDate}</footer>
  </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='div'>
    <h1 className='header'>{appName}</h1>
    <Card />
    <Card />
  </div>
);
