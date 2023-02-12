import React from 'react';

const Advertised = ({item}) => {

    const {name}=item;

    console.log(name)
    
    return (
        <div>
            <h1>Advertised items</h1>
           
        </div>
    );
};

export default Advertised;