import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOutsideClick = (event) => {
    if (
      event.target.closest("#dropdownMenu") === null &&
      event.target.closest("#profileImage") === null
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="navbar bg-cyan-600 text-white">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Doctors</a></li>
            <li><a href="#">Appointments</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-semibold">BF HealthCare</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-semibold text-white"><a href="#">Home</a></li>
          <li className="font-semibold text-white"><a href="#">About Us</a></li>
          <li className="font-semibold text-white"><a href="#">Services</a></li>
          <li className="font-semibold text-white"><a href="#">Doctors</a></li>
          <li className="font-semibold text-white"><a href="#">Appointment</a></li>
        </ul>
      </div>
      <div className="navbar-end relative">
        <img
          id="profileImage"
          className="max-w-[40px] max-h-[40px] cursor-pointer"
          src="https://i.ibb.co/ds91DDc/profile.png"
          alt="Profile"
          onClick={handleProfileClick}
        />
        {dropdownOpen && (
          <div
            id="dropdownMenu"
            className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg"
            style={{ top: '100%' }}  // Position dropdown directly below the profile image
          >
            <Link to="/login" href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Login</Link>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Signout</a>
            <Link to="/profile" href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</Link>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
            <button
              className="w-full text-left px-4 py-2 bg-cyan-600 text-white"
              onClick={() => setDropdownOpen(false)}
            >
              Exit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
