import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import userDefaultPic from '../assets/user.png';

const Navbar = () => {
  const { user, logOut } = useContext(authContext);

  const handleLogOut = () => {
    toast.success('Successfully logged-out', {
      style: {
        background: '#FFB400',
        color: 'white',
      },
    });
    logOut();
  };
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/addProduct">Add Product</Link>
      </li>
      <li>
        <Link to="/myCart">My Cart</Link>
      </li>
    </>
  );
  return (
    <div className="bg-[#FACC15]">
      <div className="navbar lg:w-[1152px] w-[400px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Prestige Car Hub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {user.photoURL ? (
                    <img className="rounded-full" src={user.photoURL} />
                  ) : (
                    <img src={userDefaultPic} />
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 space-y-2"
              >
                <p className="font-bold mb-5 text-center border-b-2 pb-2">
                  {user?.displayName}
                </p>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <p
                    onClick={handleLogOut}
                    className=" bg-black text-[#FACC15] py-2 hover:bg-yellow-500 hover:text-black  focus:outline-none focus:ring active:text-yellow-500 "
                  >
                    Logout
                  </p>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="rounded bg-black  text-[#FACC15] lg:px-8 lg:py-2 px-6 py-1 hover:bg-yellow-500 hover:text-black focus:outline-none focus:ring active:text-yellow-500">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
