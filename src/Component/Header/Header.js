import React, { useState } from "react";
import "../Header/Header.css";
import logo from "../../Assets/logo.png";
import user from "../../Assets/user.png";
import btn from "../../Assets/btn.png";

const Header = () => {
  const [smallNav, setSmallNav] = useState(false);

  const navLinks = (
    <>
      <li>
        <a className="text-sm font-semibold mr-6" href="/">
          Paytm for Consumer
        </a>
      </li>
      <li>
        <a className="text-sm font-semibold mr-6" href="/">
          Paytm for Business
        </a>
      </li>
      <li>
        <a className="text-sm font-semibold mr-6" href="/">
          Investor Relations
        </a>
      </li>
      <li>
        <a className="text-sm font-semibold mr-6" href="/">
          Company
        </a>
      </li>
      <li>
        <a className="text-sm font-semibold mr-6" href="/">
          Career
        </a>
      </li>
    </>
  );

  return (
    <div className="max-w-[1400px] mx-auto  px-[52px] py-[47px]">
      <nav className="flex justify-between items-center">
        <button
          onClick={() => {
            setSmallNav(!smallNav);
          }}
          className="mr-3 inline-block md:hidden"
        >
          <img src={btn} alt="" />
        </button>
        <div className="flex">
          <button
            onClick={() => {
              setSmallNav(!smallNav);
            }}
            className="mr-3 xl:hidden hidden md:inline-block"
          >
            <img src={btn} alt="" />
          </button>

          <img src={logo} alt="brand-logo" />
        </div>
        <ul className="hidden xl:flex">{navLinks}</ul>

        <button className="bg-sky-400 text-white px-2 py-1 rounded-3xl">
          <span className="flex items-center">
            Sign Up
            <img src={user} alt="user" className="ml-2" />
          </span>
        </button>
      </nav>
      {smallNav && <ul>{navLinks}</ul>}
    </div>
  );
};

export default Header;