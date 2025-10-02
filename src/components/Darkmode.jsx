import { useState } from "react";
import Menu from "./Menu";

export default function Darkmode() {
  const [mode, setMode] = useState(true);
  return (
    <div
      className={`w-full h-[100vh] ${
        mode ? "bg-white" : "bg-slate-900"
      } duration-300`}
    >
      <div className="w-full h-full flex justify-center items-center gap-5">
        <button
          className={`animate-bounce font-medium text-4xl px-5 py-2 rounded-xl duration-300 ${
            mode ? "text-white bg-slate-900" : "text-black bg-white"
          }`}
          onClick={() => setMode(!mode)}
        >
          {mode ? "🌙" : "☀️"}
        </button>

        {/* <div
          className={`${
            mode ? "text-black" : "text-white"
          } animate-bounce duration-300`}
        >
          <Profile name={"Mizu"} />
        </div> */}
      </div>
    </div>
  );
}
