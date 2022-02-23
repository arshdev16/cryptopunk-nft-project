import "./App.css";
import Header from "./components/Header";
import Punklist from "./components/Punklist";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Main from "./components/Main";

function App() {
  const [punkList, setPunkList] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  useEffect(() => {
    async function getNFTs() {
      const nfts = await axios.get(
        "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x20ce7B0EEf38F37B1355a4eB72DA34A0122Cd91b"
      );
      setPunkList(nfts.data.assets);
      console.log(nfts.data.assets);
    }
    return getNFTs();
  }, []);
  return (
    <div className="App">
      <Header />
      {punkList.length > 0 && (
        <>
          <Main punkList={punkList} selectedPunk={selectedPunk} />
          <Punklist punkList={punkList} setSelectedPunk={setSelectedPunk} />
        </>
      )}
    </div>
  );
}

export default App;
