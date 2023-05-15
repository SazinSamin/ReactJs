// Functional Component
function Card(props) {
  // recieve props and destructured the object to get the values
  const {title, author, created_at} = props;
  return <div className='card'>
    <h2>{title}</h2>
    <h3>{author}</h3>
    <footer>{created_at}</footer>
  </div>
}


export default Card;