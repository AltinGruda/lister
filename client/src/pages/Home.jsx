import Navbar from "../components/Navbar";
import { useQuery } from "@tanstack/react-query";
import fetchList from "../utils/fetchList";
import List from "../components/List";

const Home = () => {
  const list = useQuery(["list"], fetchList);
  return (
    <div>
      <Navbar />
      <p className="flex justify-center">
        {/* Hello {JSON.stringify(userObject.displayName).split(`"`)[1]} */}
      </p>
      <div className="flex items-center justify-center">
        <List list={list?.data} />
      </div>
    </div>
  );
};

export default Home;
