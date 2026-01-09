import React from 'react';
import './grandpa.css';
import Dad from './Dad';
import Uncle from './Uncle';
import Antu from './Antu';

const GrandPa = ({assets}) => {
    return (
        <div
        className='family-tree style'>
            <h3>GrandPa</h3>
            <section style={{display:'flex'}}>
                <Dad assets={assets}></Dad>
                <Uncle></Uncle>
                <Antu assets={assets}></Antu>
            </section>
        </div>
    );
};

export default GrandPa;