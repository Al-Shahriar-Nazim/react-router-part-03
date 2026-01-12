import React from 'react';
import GrandPa from './GrandPa';
import { createContext } from 'react';
 const AssetContext = createContext("");

const FamilyTree = () => {
    const assets = 'Golden';
    const newAssets = 'Diamond';
    return (
        <div>
            <h3>Fmaily tree</h3>
            <div>
                <AssetContext.Provider value={newAssets}>
                    <GrandPa assets={assets}></GrandPa>
                </AssetContext.Provider>
            </div>
               
        </div>
    );
};

export default FamilyTree;
export { AssetContext };