import { memo } from "react";

// use memo to skip rendering the same component again & again
// if component itself or it's props element is not changed

const HomePage = memo(({handleIncrement}) => {



  return <div>
    {console.log("homepage rendered")}
    <h1>This is HomePage</h1>
    <button onClick={handleIncrement}>Change count from children</button>
  </div>
}
)
export default HomePage;