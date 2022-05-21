import React, { useState } from 'react'

// import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
// import WalletConnect from "@walletconnect/web3-provider";

// import Web3Modal from "web3modal";

import { ethers } from 'ethers';

// const web3Modal = new Web3Modal({
//     providerOptions // required
// });

// export const providerOptions = {
//     coinbasewallet: {
//         package: CoinbaseWalletSDK,
//         options: {
//             appName: "Web 3 Modal Demo",
//             infuraId: process.env.INFURA_KEY
//         }
//     },
//     walletconnect: {
//         package: WalletConnect,
//         options: {
//             infuraId: process.env.INFURA_KEY
//         }
//     }
// };


function Dashboard({ closeDashboardHandler }) {
    const [connected, connectWallet] = useState(false);
    const [address, changeAddress] = useState('');

    // const [provider, setProvider] = useState();
    // const [library, setLibrary] = useState();

    const connectMyWallet = async () => {
        // try {
        //     const provider = await web3Modal.connect();
        //     const library = new ethers.providers.Web3Provider(provider);
        //     setProvider(provider);
        //     setLibrary(library);
        // } catch (error) {
        //     console.error(error);
        // }
    };


    const connectMetamask = async () => {
        if (window.ethereum) {
            try {
                //change network to Polygon Mumbai
                const sw = await window.ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [
                        {
                            ...networks['polygon']
                        }
                    ]
                })


                //connect wallet
                const result = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                console.log(result);
                connectWallet(true);
                changeAddress(result[0]);

            } catch (error) {
                console.log(error.message);

            }
        } else {
            alert("You need to install Metamask first !");
        }
    };

    // Polygon Mumbai testnet details
    const networks = {
        polygon: {
            chainId: `0x${Number(80001).toString(16)}`,
            chainName: "Mumbai Testnet",
            nativeCurrency: {
                name: "MATIC",
                symbol: "MATIC",
                decimals: 18
            },
            rpcUrls: ["https://rpc-mumbai.matic.today/"],
            blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
        }
    }



    return (
        <div className='flex flex-col z-30 w-2/4 h-3/4 p-4 absolute top-4 left-4 bg-white border-black rounded-xl'>
            <div onClick={closeDashboardHandler}
                className='flex flex-row justify-end text-2xl cursor-pointer mx-1 my-1'>x</div>
            {
                !connected ? (
                    <div className='flex flex-col justify-center items-center my-8'>
                        <button
                            className="max-w-sm top-9 bg-[#00b8d5] right-4 rounded-xl py-2 px-6 text-[#0067d5] font-bold my-4">Use Coinbase Wallet</button>
                        <button
                            className="max-w-sm top-9 bg-[#00b8d5] right-4 rounded-xl py-2 px-6 text-[#0067d5] font-bold my-4">Use WalletConnect</button>
                        <button onClick={connectMetamask}
                            className="max-w-sm top-9 bg-[#00b8d5] right-4 rounded-xl py-2 px-6 text-[#0067d5] font-bold my-4">Use Metamask</button>
                    </div>
                ) : (
                    <div className='px-4'>
                        <h1 className='text-2xl font-bold mb-4'>Welcome, {address.substring(0, 10)}...</h1>
                        <hr />
                    </div>
                )
            }

        </div>
    )
}

export default Dashboard