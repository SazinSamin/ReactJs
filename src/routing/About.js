import { useNavigate } from "react-router";


const About = () => {
  // Navigation
  const navigate = useNavigate();

  return <div>
    <h2>This is About</h2>
    <button onClick={() => {
      navigate("/");
    }}>Back to Home</button>
  </div>
}

export default About;