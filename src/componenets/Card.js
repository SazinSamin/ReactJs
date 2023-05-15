const date = new Date();

const appName = "Todo App";
 const cardName = "Learn React";
 const cardDesc = "React is frontend development framework";
const cardDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;


// Functional Component
function Card(props) {
  // recieve props and destructured the object to get the values
  const {title, desc} = props;
  return <div className='card'>
    <h2>{title}</h2>
    <h3>{desc}</h3>
    <footer>{cardDate}</footer>
  </div>
}


export default Card;