import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import userDefaultPic from '../assets/user.png';
import logo from '../assets/logo.png';
import darkLogo from '../assets/darkLogo.png';

const Navbar = () => {
  const { user, logOut, handleThemeSwitch, theme } = useContext(authContext);
  const handleLogOut = () => {
    toast.success('Successfully logged-out', {
      style: {
        background: '#4F46E5',
        color: 'white',
      },
    });
    logOut();
  };
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? ' underline mr-4 ' : 'mr-4'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/addProduct"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? ' underline mr-4 ' : 'mr-4'
        }
      >
        Add Product
      </NavLink>
      <NavLink
        to="/myCart"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? ' underline mr-4 ' : 'mr-4'
        }
      >
        My Cart
      </NavLink>
    </>
  );

  const themeSwitch = () => {
    handleThemeSwitch();
  };

  return (
    <div className="bg-[#FACC15] dark:bg-gray-800">
      <div className="navbar lg:w-[1152px] w-[400px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                stroke="red"
                fill=""
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
              className="menu menu-sm dropdown-content mt-3 z-[2] p-2   rounded w-52 text-white  dark:text-white bg-gray-700  font-medium text-base "
            >
              {navLinks}
            </ul>
          </div>
          <img className="w-32" src={theme === 'dark' ? darkLogo : logo} />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-gray-900 dark:text-white px-1 font-medium text-base">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end  ">
          <div className=" mr-5 mt-3">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                onClick={themeSwitch}
                type="checkbox"
                checked={theme === 'dark'}
              />

              {/* sun icon */}
              <svg
                className="swap-on  w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          {user ? (
            <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded">
                  {user.photoURL ? (
                    <img className="rounded-full" src={user.photoURL} />
                  ) : (
                    <img src={userDefaultPic} />
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[2] p-2 shadow menu menu-sm dropdown-content border  rounded-md w-52 space-y-2"
              >
                <p className="font-bold mb-5 text-center border-b-2 border-black pb-2">
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
              <button className="rounded bg-black dark:bg-purple-500 text-white lg:px-8 lg:py-2 px-6 py-1 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring active:text-yellow-500">
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
