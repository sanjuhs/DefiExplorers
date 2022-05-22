import React from "react";
import { BiArrowBack } from "react-icons/bi";
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

function Aave({ changePageController }) {
  const reward = async () => {
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);

    let tempSigner = tempProvider.getSigner();

    let tempContract = new ethers.Contract(contractAddress, abi, tempSigner);

    //exeucte mint function from contract
    try {
      unityContext.send("quest4 aave", "updatevals", 4);
      await tempContract.functions.claimReward(4);
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
        <h1 className="text-2xl font-bold ml-4">Aave</h1>
      </div>

      <hr />
      <div className="my-4 mx-4">
        <p className="text-base mb-4">
          Aave is a decentralized finance (DeFi) protocol that lets people lend
          and borrow cryptocurrencies and real world assets (RWAs) without
          having to go through a centralized intermediary. When they lend, they
          earn interest; when they borrow, they pay interest.
        </p>
        <h2 className="font-bold text-base mb-4">About the Quest</h2>
        <p className="text-base mb-4">
          Deposit $5 in Aave V1 protocol to claim rewards
        </p>
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

export default Aave;
