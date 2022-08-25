import Content from "../Components/Content/Content";
import Sidebar from "../Components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <Content />
    </div>
  );
};

export default Home;
