import Navbar from "../components/Navbar";
import { useQuery } from "@tanstack/react-query";
import fetchList from "../utils/fetchList";
import List from "../components/List";

const Home = () => {
  const list = useQuery(["list"], fetchList);
  if (!list) {
    return (
      <div>
        <Navbar />
        <div className="flex items-center justify-center">
          <p>
            Create and customize your list with the preferred youtube channels
          </p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">
        <List list={list?.data} />
      </div>
    </div>
  );
};

export default Home;
