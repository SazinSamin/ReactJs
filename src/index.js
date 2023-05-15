import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const name = 'Orca Solutions';
const intro = 'A software solution is typically custom-built or configured to solve a specific customer problem. ';
const date = new Date();
const currentDate = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

const style = {
  color: "red", 
  fontSize: "2rem",
  textAlign: "center",
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/*inline styling*/}
    <h1 style={{color: "blue", textAlign: "center"}}>{name}</h1>
    {/*inline styling from object*/}
    <h2 style={style}>{intro}</h2>
    {/*from public folder styling sheet*/}
    <h2 className='dateStyle'>{currentDate + "." + currentMonth + "." + currentYear}</h2>
    {/*style from src folder*/}
    <h3 className='websiteStyle'>orcasolution.com</h3>
  </div>
);
