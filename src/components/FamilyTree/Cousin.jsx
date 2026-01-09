import React from 'react';
import Spcial from './Spcial';

const Cousin = ({name,assets}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === 'Jom jom' && <Spcial assets={assets}></Spcial>
            }
        </div>
    );
};

export default Cousin;