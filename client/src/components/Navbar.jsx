const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <h1 className="btn btn-ghost normal-case text-xl">Lister</h1>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <p>Item 1</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
