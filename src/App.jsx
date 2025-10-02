import Darkmode from "./components/Darkmode";
import Data from "./components/Data";
import State from "./components/State";
import Profile from "./components/Profile";
import Home from "./Home";
import { useState } from "react";

import { users } from "./components/User";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Slidebar from "./components/Sliderbar";
import Menu from "./components/Menu";
import Card from "./components/Card";
// import Cards from "./components/Card";

export default function App() {
  const [mode, setMode] = useState(true);
  return (
    <div
      className={`duration-150 user-select-none ${
        mode
          ? "bg-white text-black min-h-screen"
          : "bg-slate-800 text-white min-h-screen"
      }`}
    >
      <Nav mode={mode} setMode={setMode} />

      <div className="px-12">
        <Slidebar />
      </div>

      <Menu mode={mode} />
      <Card mode={mode}/>

      {/* <Cards mode={mode} /> */}

      <div>
        {/* {users.map((user, index) => (
          <Profile
            key={index}
            name={user.name}
            title={user.title}
            status={user.status}
            image={user.image}
            bgImg={user.bgImg}
            bio={user.bio}
          />
        ))} */}
        {/* <Profile
          name="Mizu"
          title="Copy paste Developer"
          image="nagumo.jpg"
          bgImg="Samurai.jpg"
          bio="I talk to ChatGPT more than I do with my family"
          status={1}
        /> */}
      </div>
    </div>
  );
}
