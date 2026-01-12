import React, { useState } from "react";
import GrandPa from "./GrandPa";
import { createContext } from "react";
const AssetContext = createContext("");
const MoneyContext = createContext(0);

const FamilyTree = () => {
  const assets = "Golden";
  const newAssets = "Diamond";
  const [money, setMoney] = useState(0);

  return (
    <div>
      <h3>Fmaily tree</h3>
      <h3>Total Money: {money}</h3>
      <div>
        <MoneyContext value={[money,setMoney]}>
          <AssetContext.Provider value={newAssets}>
            <GrandPa assets={assets}></GrandPa>
          </AssetContext.Provider>
        </MoneyContext>
      </div>
    </div>
  );
};

export default FamilyTree;
export { AssetContext };
export { MoneyContext };
