const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <h1 className="btn btn-ghost normal-case text-xl">Lister</h1>
      </div>
      <div className="flex-auto">
        <ul className="menu menu-horizontal px-1">
          <li>
            <p>Create</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
