import Banner from "./Banner";
import News from "./News";
import Recommended from "./Recommended";
import TopSeller from "./TopSeller";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopSeller></TopSeller>
      <Recommended />
      <News />
    </div>
  );
};

export default Home;
