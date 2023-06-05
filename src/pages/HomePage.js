import { memo } from "react";

// use memo to skip rendering the same component again & again
// if component itself or it's props element is not changed

const HomePage = memo(() => {
  return <div>
    {console.log("homepage rendered")}
    <h1>This is HomePage</h1>
  </div>
}
)
export default HomePage;