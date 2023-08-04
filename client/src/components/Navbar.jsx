import axios from "axios";

const Navbar = () => {
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
          <li>
            <a href="/create">Create</a>
          </li>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
