import React from "react";
import Logo from '../../assets/images/logo.png';

function Navbar() {
  return (
    <div data-aos="fade-down" className="fixed top-0 w-full z-[99] bg-black/10 backdrop-blur-sm py-4 sm:py-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex text-white items-center font-bold gap-4 text-2xl">
            <img src={Logo} alt="logo" className=" w-10"/>
            <span>TCJ-SPACE</span>
          </div>
          <div className="text-white hidden sm:block">
            <ul className="flex items-center gap-6 text-xl py-4">
              <li>
                <a src="#">Home</a>
              </li>
              <li>
                <a src="#">Technology</a>
              </li>
              <li>
                <a src="#">Galaxy</a>
              </li>
              <li>
                <a src="#">Satellite</a>
              </li>
            </ul>
          </div>
          <div>
            <button className="text-white border-2 border-white px-3 py-1 rounded-md">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
