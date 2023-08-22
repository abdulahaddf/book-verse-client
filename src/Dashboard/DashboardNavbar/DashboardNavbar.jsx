import logo from "../../assets/image/logo.png";
const DashboardNavbar = () => {
  return (
    <div className="navbar h-10 px-4 z-10">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search"
          className="input input-group-sm input-bordered h-8 w-24 
          md:w-auto rounded-sm"
        />
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <a className="normal-case text-xl">Admin</a>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10">
              <img src={logo} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
