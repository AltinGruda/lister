import Navbar from "../components/Navbar";
import { useQuery } from "@tanstack/react-query";
import fetchList from "../utils/fetchList";
import List from "../components/List";
import { useContext } from "react";
import { myContext } from "../store/Context";

const Home = () => {
  const list = useQuery(["list"], fetchList);
  const userObject = useContext(myContext);
  const googleLogin = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  console.log(userObject);
  if (!userObject) {
    return (
      <div>
        <Navbar />
        <div className="flex items-center justify-center flex-col">
          <p>
            Create and customize your list with the preferred youtube channels
          </p>
          <button onClick={googleLogin}>Log In with Google</button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <p className="flex justify-center">
        Hello {JSON.stringify(userObject.displayName).split(`"`)[1]}
      </p>
      <div className="flex items-center justify-center">
        <List list={list?.data} />
      </div>
    </div>
  );
};

export default Home;
