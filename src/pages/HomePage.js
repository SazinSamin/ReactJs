import { Helmet } from "react-helmet"

const HomePage = ({title}) => {
  return <div>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <h1>This is HomePage</h1>
  </div>
}

export default HomePage;