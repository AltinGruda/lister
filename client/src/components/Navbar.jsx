const Navbar = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
