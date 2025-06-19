import React, { useState } from "react";
import campLogo from "../assets/campLogo.png";
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu (user/host)

  // You might need state for search inputs if they are functional
  // const [location, setLocation] = useState('');
  // const [checkIn, setCheckIn] = useState('');
  // const [checkOut, setCheckOut] = useState('');
  // const [guests, setGuests] = useState('');

  return (
    <header className="bg-black text-white py-4 px-4 sm:px-6 lg:px-8 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo - Camping themed */}
        <div className="flex items-center space-x-2">
          {/* You can replace this SVG with your own camping-themed logo */}
         <img src={campLogo} className="aspect-square w-15 h-15" alt="" />
          <span className="font-bold text-xl text-white hidden sm:block">
            CampConnect
          </span>
        </div>

        {/* Navigation Links - Hidden on small screens, flex on medium */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold">
          <a
            href="#campType"
            className="py-2 border-b-2 border-transparent hover:border-white"
          >
            Find Camp Type
          </a>
          <a
            href="#activities"
            className="py-2 border-b-2 border-transparent hover:border-white"
          >
            Camping Activities
          </a>
          <a
            href="#joinCC"
            className="py-2 border-b-2 border-transparent hover:border-white"
          >
            Join Camp Card
          </a>
        </nav>

        {/* User Menu & Host */}
        <div className="flex items-center space-x-2">
          {/* User Profile Button */}
          <button
            className="flex items-center space-x-2 border border-gray-600 rounded-full py-2 pl-3 pr-2 shadow-md hover:shadow-lg transition-shadow duration-200 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            {/* User Avatar */}
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
              } // Replace with dynamic user avatar
              alt="User Avatar"
              className="h-7 w-7 rounded-full bg-gray-600"
            />
            {/* Notification Dot (optional) */}
            <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-black"></span>
          </button>

          {/* Mobile/User Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-50">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Sign Up
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Log In
              </a>
              <div className="border-t border-gray-200 my-2"></div>
              <a
                href="#campType"
                className="block px-4 py-2 hover:bg-gray-100 md:hidden"
              >
                Find Camp Type
              </a>
              <a
                href="#activities"
                className="block px-4 py-2 hover:bg-gray-100 md:hidden"
              >
                Camping Activities
              </a>
              <a
                href="#joinCC"
                className="block px-4 py-2 hover:bg-gray-100 md:hidden"
              >
                Join Camp Card
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Help
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Search Bar - Visible on desktop, simplified/hidden on phone */}
      <div className="mt-6 flex justify-center">
        {/* Desktop Search Bar */}
        <div className="hidden md:flex bg-white text-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 divide-x divide-gray-300">
          <div className="px-6 py-3">
            <label
              htmlFor="location"
              className="block text-xs font-bold mb-0.5"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              placeholder="Where are you going?"
              className="w-full focus:outline-none text-sm placeholder-gray-500"
              // value={location} onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="px-6 py-3">
            <label htmlFor="checkin" className="block text-xs font-bold mb-0.5">
              Check in
            </label>
            <input
              type="text"
              id="checkin"
              placeholder="Add dates"
              className="w-full focus:outline-none text-sm placeholder-gray-500"
              // value={checkIn} onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div className="px-6 py-3">
            <label
              htmlFor="checkout"
              className="block text-xs font-bold mb-0.5"
            >
              Check out
            </label>
            <input
              type="text"
              id="checkout"
              placeholder="Add dates"
              className="w-full focus:outline-none text-sm placeholder-gray-500"
              // value={checkOut} onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
          <div className="flex items-center px-6 py-3">
            <div className="flex-grow">
              <label
                htmlFor="guests"
                className="block text-xs font-bold mb-0.5"
              >
                Guests
              </label>
              <input
                type="text"
                id="guests"
                placeholder="Add guests"
                className="w-full focus:outline-none text-sm placeholder-gray-500"
                // value={guests} onChange={(e) => setGuests(e.target.value)}
              />
            </div>
            <button className="ml-4 p-3 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors duration-200 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search Button/Bar */}
        <button className="md:hidden w-full max-w-sm flex items-center justify-between bg-white text-gray-800 rounded-full py-3 px-5 shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              id="location"
              placeholder="Where are you going?"
              className="w-full focus:outline-none text-sm placeholder-gray-500"
              // value={location} onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="p-2 bg-red-500 rounded-full text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
