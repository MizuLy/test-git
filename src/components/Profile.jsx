import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiPhp,
  DiGithub,
} from "react-icons/di";
import { SiVuedotjs } from "react-icons/si";
import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Profile({ name, title, status, image, bio, bgImg }) {
  const [mode, setMode] = useState(true);
  return (
    <div
      className={`w-full min-h-screen flex justify-center items-center duration-300 ${
        mode ? "bg-slate-900 " : "bg-white "
      }`}
    >
      <div
        className={`w-[300px] h-[370px] rounded-2xl overflow-hidden shadow-2xl duration-300 ${
          mode
            ? "bg-slate-900 text-white shadow-2xl shadow-white border-8 "
            : "bg-white text-slate-900 shadow-2xl border-8 border-slate-900"
        }`}
      >
        <div className="w-full h-[100px] flex justify-center relative">
          {/* Background image behind */}
          <img
            src={bgImg}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          {/* Profile image */}
          <div
            className={`relative w-[100px] h-[100px] rounded-full border-4 mt-[50px] overflow-hidden duration-300 ${
              mode ? "border-slate-900" : "border-white"
            }`}
          >
            <img
              src={image}
              alt="profile"
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute bottom-[11.5px] right-2 w-5 h-5 rounded-full border-2 duration-300 z-20 ${
                status ? "bg-green-500" : "bg-red-600"
              } ${mode ? "border-slate-900" : "border-white"}`}
            ></div>
          </div>
        </div>

        <div className="flex flex-col justify-center w-full text-center mt-[50px] px-5">
          <div className="flex m-auto relative">
            <h1 className="text-3xl font-bold">{name}</h1>
            <img
              src="/Mizu.png"
              alt="icon"
              className="w-5 h-5 absolute top-[8px] left-[70px]"
            />
          </div>
          <h1 className="text-gray-500">{title}</h1>
          <span>
            <button
              className="animate-pulse pt-2 text-2xl"
              onClick={() => setMode(!mode)}
            >
              {mode ? <MdLightMode /> : <MdDarkMode />}
            </button>
          </span>

          <marquee
            className="border-x-[1px]"
            behavior="scroll"
            direction="left"
            scrollamount="10"
          >
            <span>{mode ? "🕊️" : "🦅"}</span>
          </marquee>
          <div className="px-5 py-2 gap-5 w-full h-[30px] flex text-2xl">
            <DiHtml5 className="text-orange-500" />
            <DiCss3 className="text-blue-500" />
            <DiJsBadge className="text-yellow-400" />
            <DiPhp className="text-blue-700" />
            <DiGithub
              className={`duration-300 ${
                mode ? "text-white" : "text-slate-900"
              }`}
            />
            <DiReact className="text-blue-500" />
            <SiVuedotjs className="text-green-500" />
          </div>
          <h1 className="text-start my-2">{bio}</h1>
        </div>
      </div>
    </div>
  );
}
