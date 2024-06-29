import "./App.css";
import { useState, useEffect } from "react";
import { connect } from "get-starknet";
import {
  RpcProvider,
  Account,
  Contract,
  json,
  stark,
  uint256,
  shortString,
  ContractFactory,
  Signer,
  CallData,
  ec,
} from "starknet";

import { StarknetProvider } from "./Provider";
// import fs from 'fs';



const contractAddress =
  "0x056231f2130bf84464176441826bf8f6f480afeaee01c48792d7e47b63cc22a0";

function App() {
  const [provider, setProvider] = useState("");
  const [address, setAddress] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = async () => {
    try {
      // allows a user to pick a wallet on button click
      const starknet = await connect();
      // connect to the wallet
      // await starknet?.enable({ starknetVersion: "v4" });
      // set account provider to provider state
      setProvider(starknet.account);
      // set user address to address state
      setAddress(starknet.selectedAddress);
      // set connection status
      setIsConnected(true);
    } catch (error) {
      alert(error.message);
    }
  };

  const d = async () => {
    // connect provider
    const privateKey0 =
      "0x0397980bf3f0ea1672a8a3a42fb01bd94457bc8b65fbe85515edf3bd27ad11b3";
    const provider3 = new RpcProvider({
      // nodeUrl: 'https://starknet-mainnet.g.alchemy.com/starknet/version/rpc/v0_7/N2CFF8nXco1J10aEfYs9sd2YMeKNNvdQ',
      nodeUrl:
        "https://starknet-sepolia.g.alchemy.com/starknet/version/rpc/v0_7/N2CFF8nXco1J10aEfYs9sd2YMeKNNvdQ",
    }); // new RpcProvider();

    // connect your account. To adapt to your own account:
    const account0Address = address;
    const account0 = new Account(provider3, account0Address, privateKey0);
    console.log(account0Address);
    console.log(account0);

    const testClassHash =
      "0x06f7e0a8e120f70e8730c03b361435d9247e154d74383c18c61db21a336a4483";

    const nonce = await provider3.getNonceForAddress(account0Address);
    console.log("Nonce:", nonce);

    const payload = {
      classHash: testClassHash,
      // constructorCalldata: [], // Add constructor calldata if needed
      salt: "0x" + Math.floor(Math.random() * 1e16).toString(16), // Pseudorandom salt
      unique: true,
    };

    const details = {
      nonce,
      version: "0x100000000000000000000000000000001",
      maxFee: "0x0", // Adjust maxFee as needed
    };

    // const deployResponse = await account0.deployContract(payload, details);

    // const deployResponse = await account0.deployContract({
    //   classHash: testClassHash,
    //   simulation_flags: [],
    // });
    const myArray1 = ['0x0a', 24, 36n];
const contractConstructor = CallData.compile({
  text: 'niceToken',
  longText: 'http://addressOfMyERC721pictures/image1.jpg', // for Cairo v2.4.0 onwards
  array1: myArray1,
});
// with older Cairo, use:   longText: shortString.splitLongString("http://addressOfMyERC721pictures/image1.jpg"),
const deployResponse = await account0.deployContract({
  classHash: testClassHash,
  constructorCalldata: contractConstructor,
  "simulation_flags" : ["SKIP_VALIDATE"],
 
},
{
   maxFee: "8589934592",
});

    await provider3.waitForTransaction(deployResponse.transaction_hash);

    provider30x06f7e0a8e120f70e8730c03b361435d9247e154d74383c18c61db21a336a4483
      .getClassAt(testClassHash)
      .then(async (result) => {
        const testAbi = result.abi;
        // You can now use testAbi
        // Connect the new contract instance:
        const myTestContract = new Contract(
          testAbi,
          deployResponse.contract_address,
          provider
        );
        console.log("✅ Test Contract connected at =", myTestContract.address);

        // const bal1 = await myTestContract.get_balance();
        // console.log('Initial balance =', bal1);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  

  const handleSubmit = async () => {
    //initialize provider with a Sepolia Testnet node
    const provider2 = new RpcProvider({
      nodeUrl:
        "https://starknet-sepolia.g.alchemy.com/starknet/version/rpc/v0_7/N2CFF8nXco1J10aEfYs9sd2YMeKNNvdQ",
    }); // new RpcProvider();

    // Connect the deployed Test contract in Sepolia Testnet
    const testAddress =
      "0x056231f2130bf84464176441826bf8f6f480afeaee01c48792d7e47b63cc22a0";

      const nonce = await provider2.getNonceForAddress(address);
      console.log("Nonce:", nonce);

    provider2
      .getClassAt(testAddress)
      .then(async (result) => {
        const testAbi = result.abi;
        // Your wallet details
    const privateKey =
    "0x0397980bf3f0ea1672a8a3a42fb01bd94457bc8b65fbe85515edf3bd27ad11b3";
    const account = new Account(provider, address, privateKey, '1');


    const contract = new Contract(testAbi, testAddress, account);

// const balance = await contract.balanceOf(starknet.account.address);
// const transfer = await contract.transfer(recipientAddress, amountFormatted);
//or: const transfer = await contract.invoke("transfer", [to, amountFormatted]);



    //     // You can now use testAbi
    //     const myTestContract = new Contract(testAbi, testAddress, provider2);


    //     // Prepare parameters for the save_maize function
    // const temperature = 25; // Example value
    // const price = 100; // Example value
    // const country = 1; // Example value

    // // Call save_maize function
    // const tx = await account.invokeFunction(testAddress, "save_maize", [temperature, price, country]);
    // console.log("Transaction result:", tx);

        // Interaction with the contract with call
        // const bal1 = await myTestContract.get_balance();
        // console.log("Initial balance =", bal1);


    // Interaction with the contract with call (not invoke)
    const bal1 = await myTestContract.call("get_balance");
    console.log("Initial balance =", bal1);

    // Interactions with the contract with meta-class
// const bal1 = await myTestContract.get_balance();
// console.log('Initial balance =', bal1.res.toString()); // Cairo 0 contract
// // increase_balance needs 2 felts, to add them to the balance.
// const myCall = myTestContract.populate('increase_balance', [10, 30]);
// const res = await myTestContract.increase_balance(myCall.calldata);
// await provider.waitForTransaction(res.transaction_hash);

// const bal2 = await myTestContract.get_balance();
// console.log('Final balance =', bal2.res.toString());

      })
      .catch((error) => {
        console.error(error);
      });
  };



  return <StarknetProvider>
    <div className="App">
      <header className="App-header">
        <main className="main">
          <h1 className="title">TEST</h1>
          {isConnected ? (
            <button className="connect">
              {address.slice(0, 5)}...{address.slice(60)}
            </button>
          ) : (
            <button className="connect" onClick={() => connectWallet()}>
              Connect wallet
            </button>
          )}

          <p className="description">
            This demo app demonstrates the use of starknet.js to interact with
            starknet contracts
          </p>

          <div className="grid">
            <p>{address}</p>
          </div>
          <button className="connect" onClick={() => handleSubmit()}>
            save
          </button>

          <button className="connect" onClick={() => d()}>
            save
          </button>
          
          
        </main>
      </header>
    </div>

  </StarknetProvider>
}
  
export default App;
