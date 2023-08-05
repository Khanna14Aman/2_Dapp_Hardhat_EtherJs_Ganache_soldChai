import abi from "./contracts/Chai.sol/chai.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Buy from "./components/Buy";
import Memos from "./components/Memos";
import chai from "./chai.png";
function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("none");
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x8Cff902B90DE9E9D3eE1Bb3017C3ED8bb5A03ED0";
      const contractAbi = abi.abi;
      try {
        const { ethereum } = window;
        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.BrowserProvider(window.ethereum);

          const signer = await provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractAbi,
            signer
          );
          console.log(contract);
          setAccount(account);
          setState({ provider, signer, contract });
        } else {
          window.alert("Please Install Metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  return (
    <div style={{ backgroundColor: "#EFEFEF", height: "100%" }}>
      <img src={chai} className="img-fluid" alt=".." width="100%" />
      <p
        class="text-muted lead "
        style={{ marginTop: "10px", marginLeft: "5px" }}
      >
        <small>Connected Account - {account}</small>
      </p>
      <div className="container">
        <Buy state={state} />
        <Memos state={state} />
      </div>
    </div>
  );
}

export default App;
