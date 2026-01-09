import React from 'react';
import Cousin from './Cousin';

const Antu = ({assets}) => {
    return (
        <div>
            <h3>Antu</h3>
            <section style={{display: 'flex'}}>
                <Cousin name="tom tom"></Cousin>
                <Cousin assets={assets} name="Jom jom"></Cousin>
            </section>
        </div>
    );
};

export default Antu;