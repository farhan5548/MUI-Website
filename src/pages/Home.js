import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import '../styles/HomeStyle.css';
import Background_IMG from '../images/background.png';

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage:`url(${Background_IMG})`}}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food in Pakistan</p>
          <Link to={"/menu"}>
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
