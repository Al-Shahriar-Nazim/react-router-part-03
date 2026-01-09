import React from 'react';
import GrandPa from './GrandPa';

const FamilyTree = () => {
    const assets = 'Golden';
    return (
        <div>
            <h3>Fmaily tree</h3>
            <GrandPa assets={assets}></GrandPa>
        </div>
    );
};

export default FamilyTree;