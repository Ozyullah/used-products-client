import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CatagoryItemsShown from './CatagoryItemsShown';

const CatagoryItems = () => {

    const uses =useLoaderData()
    console.log(uses)
    return (
        <div className=' w-9/12 mx-auto mt-5 mb-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
            {
                uses.map(use =><CatagoryItemsShown 
                key={use._id}
                use={use}
                ></CatagoryItemsShown>)
            }
        </div>
    );
};

export default CatagoryItems;