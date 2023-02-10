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
            {
                goods.map(item =><div key={item._id}>
                    <img src={item.img} alt="" />
                    <h2>{item.name}</h2>
                    <h4>৳ {item.resale_price}</h4>
                </div>)
            }
        </div>
    );
};

export default Advertised;