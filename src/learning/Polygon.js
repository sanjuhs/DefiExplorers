import React from "react";
import { BiArrowBack } from "react-icons/bi";
import transakSDK from "@transak/transak-sdk";
import { useDispatch, useSelector } from "react-redux";
import abi from "../abi/defe.json";
import { ethers } from "ethers";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "/build/build5.loader.js",
  dataUrl: "/build/build5.data.unityweb",
  frameworkUrl: "/build/build5.framework.js.unityweb",
  codeUrl: "/build/build5.wasm.unityweb",
});

const contractAddress = "0x3DD7793eB4a054B8090f11878ebF4742e526A598";

function Polygon({ changePageController }) {
  const address = useSelector((state) => state.user.address);

  function openTransak() {
    let transak = new transakSDK({
      apiKey: "1c3a2fd3-3ee3-4625-b38f-e85f7f2369a0", // Your API Key (Required)
      environment: "STAGING", // STAGING/PRODUCTION
      defaultCryptoCurrency: "ETH",
      themeColor: "000000", // App theme color
      hostURL: window.location.origin,
      widgetHeight: "700px",
      widgetWidth: "500px",
    });

    transak.init();

    // To get all the events
    transak.on(transak.ALL_EVENTS, (data) => {
      console.log(data);
    });

    // This will trigger when the user closed the widget
    transak.on(transak.EVENTS.TRANSAK_WIDGET_CLOSE, (eventData) => {
      console.log(eventData);
      transak.close();
    });

    // This will trigger when the user marks payment is made.
    transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
      console.log(orderData);
      window.alert("Payment Success");
      transak.close();
    });
  }

  const reward = async () => {
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);

    let tempSigner = tempProvider.getSigner();

    let tempContract = new ethers.Contract(contractAddress, abi, tempSigner);

    //exeucte mint function from contract
    try {
      unityContext.send("quest1 polygon", "updatevals", 1);
      await tempContract.functions.claimReward(1);
      alert("You won 1 DEFE token, check your wallet balance");
    } catch (error) {
      console.log(error);
      alert("Already claimed the reward !");
    }
  };

  return (
    <div>
      <div className="flex flex-row mb-4 ml-4 items-center">
        <BiArrowBack
          className="cursor-pointer"
          onClick={() => changePageController("home")}
        />
        <h1 className="text-2xl font-bold ml-4">Polygon</h1>
      </div>

      <hr />
      <div className="my-4 mx-4">
        <p className="text-base mb-4">
          Polygon is a Layer-2 scaling solution created to help bring mass
          adoption to the Ethereum platform. It caters to the diverse needs of
          developers by providing tools to create scalable decentralized
          applications (dApps) that prioritize performance, user experience
          (UX), and security.{" "}
        </p>
        <h2 className="font-bold text-base mb-4">The Quest</h2>
        <p className="text-base mb-4">Get 0.4MATIC from Transak</p>
        <button
          onClick={openTransak}
          className="max-w-sm ml-4 mt-4 bg-[#00b8d5] rounded-xl py-2 px-6 text-[#0067d5] font-bold"
        >
          Get MATIC using Transak
        </button>
      </div>
      <button
        onClick={reward}
        className="max-w-sm ml-4 mt-4 bg-[#00b8d5] rounded-xl py-2 px-6 text-[#0067d5] font-bold"
      >
        Done with the quest ? Claim Reward
      </button>
    </div>
  );
}

export default Polygon;
