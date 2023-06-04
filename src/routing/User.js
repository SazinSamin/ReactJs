import { useParams } from "react-router";

const User = () => {

  // get the route parameter through useParams hook
  const {userName} = useParams();

  return <div>
    <h1>User</h1>
    <h2>{userName}</h2>
  </div>
}

export default User;