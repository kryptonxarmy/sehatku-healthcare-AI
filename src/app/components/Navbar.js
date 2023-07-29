import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-white text-black shadow-2xl fixed shadow-green-300 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-white w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <h1 className="text-2xl font-bold">Sehat<span className="text-green-600 ">Ku</span></h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="hover:text-green-500">Home</a>
          </li>
          <li>
            <a className="hover:text-green-500">About</a>
          </li>
          <li tabIndex={2}>
            <details>
              <summary className="hover:text-green-500">Features</summary>
              <ul className="p-2 bg-white rounded-none">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn border-none text-white bg-gradient-to-r from-green-700 to-green-500">Try Now</a>
      </div>
    </div>
  );
}

export default Navbar;
