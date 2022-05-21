import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "/build/build5.loader.js",
  dataUrl: "/build/build5.data.unityweb",
  frameworkUrl: "/build/build5.framework.js.unityweb",
  codeUrl: "/build/build5.wasm.unityweb",
});

// var buildUrl = "Build";
//       var loaderUrl = buildUrl + "/build1.loader.js";
//       var config = {
//         dataUrl: buildUrl + "/build1.data.gz",
//         frameworkUrl: buildUrl + "/build1.framework.js.gz",
//         codeUrl: buildUrl + "/build1.wasm.gz",
//         streamingAssetsUrl: "StreamingAssets",
//         companyName: "DefaultCompany",
//         productName: "2dRPG_1_test",
//         productVersion: "1.0",
//         showBanner: unityShowBanner,
//       };
// this is a test only yeah its tru terminal ?

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with this app
        </a>
        <Unity unityContext={unityContext} id="unityg" />
      </header>
    </div>
  );
}

export default App;
