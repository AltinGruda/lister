import { useContext } from "react";
import { myContext } from "../store/Context";
import axios from "axios";
import { Link } from "react-router-dom";

const Navbar = () => {
  const userObject = useContext(myContext);

  const logout = () => {
    axios
      .get("http://localhost:5000/auth/logout", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data === "done") {
          window.location.href = "/";
        }
      });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          Lister
        </a>
      </div>
      <div className="flex-auto">
        <ul className="menu menu-horizontal px-1">
          {userObject ? (
            <>
              <li>
                <a href="/create">Create</a>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/"></Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
