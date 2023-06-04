import Style from "./card.module.css";

const Card = ({ id, title, author, created_at }) => {

  return <div className={Style.Card}>
    <h1>{title}</h1>
    <h3>{author}</h3>
    <p>{created_at}</p>
  </div>
}

export default Card;