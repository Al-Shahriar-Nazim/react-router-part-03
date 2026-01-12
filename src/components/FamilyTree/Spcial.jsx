import React from 'react';
import { useContext } from 'react';
import { AssetContext } from './FamilyTree';


const Spcial = ({assets}) => {
const newAssets = useContext(AssetContext);
    return (
        <div>
            <h3>Spcial</h3>
            <p>Assets:{assets}</p>
            <p>New Assets :{newAssets}</p>
        </div>
    );
};

export default Spcial;