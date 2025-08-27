import React from "react";
import { NavLink } from "react-router";
import useAuth from "../hooks/useAuth";
import { FaSignOutAlt } from "react-icons/fa";

export default function NavBar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "My Bookings", path: "/my-bookings" },
  ];

  const { user, logOut } = useAuth();

  return (
    <div className="navbar bg-base-100 shadow-[0px_0px_10px] shadow-white px-10 py-8 backdrop-blur-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems.map((item) => (
              <NavLink to={item.path}> {item.name} </NavLink>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <img
            className="w-12 h-12 rounded-full"
            src="images/logo.png"
            alt="Logo"
          />
          <a className="btn btn-ghost text-xl">Tanzar</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10">
          {navItems.map((item) => (
            <NavLink to={item.path}> {item.name} </NavLink>
          ))}
        </ul>
      </div>
      <div className="navbar-end gap-10">
        {user ? (
          <div className="flex items-center gap-4">
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-10 h-10 rounded-full"
            />
            <button
              className="btn btn-outline bg-red-200 text-red-500"
              onClick={logOut}
            >
              <FaSignOutAlt className="mr-2" />
              Log out
            </button>
          </div>
        ) : (
          <>
            <NavLink className="btn btn-neutral" to={`/auth/login`}>
              Login
            </NavLink>
            <NavLink className="btn btn-outline" to={`/auth/register`}>
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}
