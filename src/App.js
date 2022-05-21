import { useState } from "react";
import "./App.css";
import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import Dashboard from "./Dashboard";



const unityContext = new UnityContext({
  loaderUrl: "/build/build5.loader.js",
  dataUrl: "/build/build5.data.unityweb",
  frameworkUrl: "/build/build5.framework.js.unityweb",
  codeUrl: "/build/build5.wasm.unityweb",
});




function App() {

  const [showDashboard,changeShowDashboard] = useState(false);


  const showTheDashboard = () => changeShowDashboard(true);

  const closeDashboard = () => changeShowDashboard(false)

  unityContext.on("Senddata", function (eventdata, eventname) {
    alert("this is true !");
    console.log("eventdata : " + String(eventdata));
    console.log(eventname);
    changeShowDashboard(true);
  });

  return (
    <div className="relative">
        <Unity unityContext={unityContext}/>
        <div onClick={showTheDashboard}
        className="w-12 h-12 absolute top-9 left-4 bg-white border-black rounded-xl cursor-pointer"></div>
        <div className="w-12 h-12 absolute top-24 left-4 bg-white border-black rounded-xl cursor-pointer"></div>
        {/* <div className="w-12 h-12 absolute top-40 left-4 bg-white border-black rounded-xl cursor-pointer"></div> */}
        <button className="max-w-sm absolute top-9 bg-[#00b8d5] right-4 rounded-xl py-2 px-6 text-[#0067d5] font-bold">Inventory</button>
        {
          showDashboard && <Dashboard closeDashboardHandler={closeDashboard}/>
        }
    </div>
  );
}

export default App;
