import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { UsedContext } from '../../Context/AuthContext';
import MyOrdersItems from './MyOrdersItems';

const MyOrders = () => {

    const {user}=useContext(UsedContext)

    const { data: orders = []}= useQuery({
        queryKey: ['bookingQuantity'],
        queryFn: async () =>{
            const res = await fetch(`https://used-products-server-gold.vercel.app/bookingQuantity?email=${user.email}`)
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Title</th>
        <th>Price</th>
        
        <th></th>
      </tr>
    </thead>
        {
            orders.map((order, i) =><MyOrdersItems 
            key={order._id}
            order={order}
            i={i}
            ></MyOrdersItems>)
        }
    
    
  </table>
</div>
        </div>
    );
};

export default MyOrders;