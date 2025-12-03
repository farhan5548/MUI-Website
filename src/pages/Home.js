import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Kitchen from '../images/kitchen.jpg'

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage:`url(${Kitchen})`}}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In Pakistan</p>
          <Link to={"/menu"}>
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
