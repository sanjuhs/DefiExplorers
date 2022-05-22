import { useState } from "react";
import "./App.css";
import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import Dashboard from "./Dashboard";
import Learning from "./Learning";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GrCircleInformation } from "react-icons/gr";

const unityContext = new UnityContext({
  loaderUrl: "/build/build5.loader.js",
  dataUrl: "/build/build5.data.unityweb",
  frameworkUrl: "/build/build5.framework.js.unityweb",
  codeUrl: "/build/build5.wasm.unityweb",
});

function App() {
  function questcompletion(questnum) {
    unityContext.send("quest0 connectWallet", "updatevals", questnum);
    //unityContext.send(questobj, "updatevals", questnum);
  }

  const [showDashboard, changeShowDashboard] = useState(false);
  const [showLearning, changeShowLearning] = useState(false);

  const showTheDashboard = () => changeShowDashboard(true);

  const closeDashboard = () => changeShowDashboard(false);

  const showTheLearning = () => changeShowLearning(true);

  const closeTheLearning = () => changeShowLearning(false);

  unityContext.on("Senddata", function (eventdata, eventname) {
    // alert("this is true !");
    //questcompletion();
    console.log("eventdata : " + String(eventdata));
    console.log(eventname);
    changeShowDashboard(true);
  });

  return (
    <div className="relative">
      <Unity unityContext={unityContext} />
      <div
        onClick={showTheDashboard}
        className="flex items-center justify-center w-12 h-12 absolute top-9 left-4 bg-white border-black rounded-xl cursor-pointer"
      >
        <MdOutlineSpaceDashboard className="text-2xl" />
      </div>
      <div
        onClick={showTheLearning}
        className="flex items-center justify-center w-12 h-12 absolute top-24 left-4 bg-white border-black rounded-xl cursor-pointer"
      >
        <GrCircleInformation className="text-2xl" />
      </div>
      {/* <div className="w-12 h-12 absolute top-40 left-4 bg-white border-black rounded-xl cursor-pointer"></div> */}
      {/* <button className="max-w-sm absolute top-9 bg-[#00b8d5] right-4 rounded-xl py-2 px-6 text-[#0067d5] font-bold">
        Inventory
      </button> */}
      {showDashboard && <Dashboard closeDashboardHandler={closeDashboard} />}
      {showLearning && <Learning closeLearningHandler={closeTheLearning} />}
    </div>
  );
}

export default App;
