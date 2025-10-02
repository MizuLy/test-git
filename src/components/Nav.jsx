import { FaCartShopping, FaUser } from "react-icons/fa6";
import { IoMenu, IoClose } from "react-icons/io5";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useState } from "react";

export default function Nav({ mode, setMode }) {
  const [menu, setMenu] = useState(true);
  return (
    <div
      className={`select-none transition-all duration-150 ${
        mode ? "text-black bg-white" : "text-white bg-slate-800"
      }`}
    >
      {/* Big */}
      <nav className="max-w-full h-[80px] hidden shadow-md lg:flex items-center sticky top-0 left-0 px-4 z-[99]">
        {/* Logo */}
        <div className="w-[20%] h-full text-3xl flex justify-center items-center gap-4">
          <img src="/Mizu.png" alt="logo" className="w-[70px]" />
          <span className="font-bold">Mizufy</span>
        </div>

        {/* Nav */}
        <div className="w-[30%] h-full font-medium text-xl flex justify-center items-center">
          <ul className="flex gap-10">
            <li className="cursor-pointer">Category</li>
            <li className="cursor-pointer">Deal</li>
            <li className="cursor-pointer">What's New</li>
            <li className="cursor-pointer">Delivery</li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="w-[25%] flex justify-center items-center">
          <input
            type="text"
            placeholder="Search..."
            className={`w-[400px] h-[40px] px-4 py-2 rounded-2xl border border-gray-300 rounded-1-md focus:outline-none focus:ring-blue-500 ${
              mode ? "text-black bg-white" : "text-white bg-slate-600"
            }`}
          />
        </div>

        {/* Random */}
        <div className="w-[25%] h-full text-xl flex justify-center gap-10 items-center font-medium">
          <div className="flex items-center cursor-pointer space-x-2">
            <FaUser size={25} />
            <span>Account</span>
          </div>
          <div className="flex items-center cursor-pointer space-x-2">
            <FaCartShopping size={25} />
            <span>Cart</span>
          </div>

          <button onClick={() => setMode(!mode)}>
            {mode ? <MdLightMode size={30} /> : <MdDarkMode size={30} />}
          </button>
        </div>
      </nav>

      {/* Small */}
      <nav className="w-full h-[90px] shadow-md md:block lg:hidden z-[99]">
        <div className="w-full h-full flex px-4 py-2">
          <div className="w-[50%] h-full ">
            <div className="w-full flex items-center gap-5">
              <img src="/Mizu.png" alt="logo" className="w-[70px] " />
              <span className="text-xl font-medium">Mizufy</span>
            </div>
          </div>
          <div className="w-[50%] h-full  flex justify-end items-center px-3">
            <div onClick={() => setMenu(!menu)}>
              {menu ? <IoMenu size={30} /> : <IoClose size={30} />}
            </div>
          </div>
        </div>

        {/* Slide */}
        <div
          className={`fixed top-0 left-0 z-[99]  shadow-md w-[80%] md:w-[40%] h-[100vh] transition-all duration-150 
            ${menu ? "-translate-x-full" : "translate-x-0"} 
            ${
              mode
                ? "text-black bg-white"
                : "text-white bg-slate-800 shadow-slate-600"
            }`}
        >
          <div className="w-full flex items-center gap-5 px-4 py-2">
            <img src="/Mizu.png" alt="logo" className="w-[70px] " />
            <span className="text-xl font-medium">Mizufy</span>
          </div>

          <div className="px-4 py-2">
            <input
              type="text"
              placeholder="Search..."
              className={`w-full h-[40px] px-4 py-2 rounded-2xl border border-gray-300 rounded-1-md focus:outline-none transition-all duration-150 focus:ring-blue-500 ${
                mode ? "text-black bg-white" : "text-white bg-slate-600"
              }`}
            />
          </div>

          <ul className="flex flex-col space-y-5 text-2xl p-4">
            <li className="cursor-pointer">Category</li>
            <li className="cursor-pointer">Deal</li>
            <li className="cursor-pointer">What's New</li>
            <li className="cursor-pointer">Delivery</li>
          </ul>

          <div className="flex px-4 py-2 gap-10">
            <div className="flex items-center cursor-pointer space-x-2">
              <FaUser size={25} />
              <span>Account</span>
            </div>
            <div className="flex items-center cursor-pointer space-x-2">
              <FaCartShopping size={25} />
              <span>Cart</span>
            </div>
          </div>
          <button className="px-4 py-2" onClick={() => setMode(!mode)}>
            {mode ? <MdLightMode size={30} /> : <MdDarkMode size={30} />}
          </button>
        </div>

        {/* Close Slide */}
        <div
          onClick={() => setMenu(!menu)}
          className={`fixed top-0 right-0 z-[99] w-[20%] md:w-[60%] h-[100vh] ${
            menu ? "translate-x-full" : "translate-x-0"
          }`}
        ></div>
      </nav>
    </div>
  );
}
