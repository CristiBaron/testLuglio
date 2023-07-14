import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-600 via-gray-400 to-gray-200 p-1 text-white flex justify-around items-center h-20">
      <img
        src="/img/digitazon-duing.jpg"
        className="h-full rounded-full"
        alt=""
      />
      <Link to="/" className="text-4xl hover:text-gray-200 font-bold ml-6 ">
        APP
      </Link>
      <img src="/img/sun-glasses.png" className="w-14" alt="" />
    </header>
  );
};

export default Header;
