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


export default Card;