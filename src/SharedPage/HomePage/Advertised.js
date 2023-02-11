import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Advertised = () => {

    const {data: goods=[]}=useQuery({
        queryKey: ['allProducts'],
        queryFn: async()=>{
            const res =await fetch('http://localhost:4000/allProducts');
            const data =await res.json();
            console.log(data)
            return data;
            
        }
    })
    return (
        <div>
            <h1>Advertised items</h1>
           
        </div>
    );
};

export default Advertised;