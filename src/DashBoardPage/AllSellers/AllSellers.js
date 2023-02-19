import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const AllSellers = () => {

    const { data: users = [], refetch}=useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res =await fetch('https://used-products-server-gold.vercel.app/sellers?role=Seller');
            const data =await res.json()
            return data;
        }
    })


    const handleVerify= id=>{
         fetch(`https://used-products-server-gold.vercel.app/users/verify/${id}`,{
            method: 'PUT'
         })
         .then(res => res.json())
         .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                toast.success("Seller Verification Succesfully")
                refetch();
            }
         })
    }

    const handleDelete= id =>{
        fetch(`https://used-products-server-gold.vercel.app/users/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                toast.success("Seller Delet successfully");
                refetch();
            }
        })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Create Verify</th>
                        <th>Remove Seller  </th>
                    </tr>
                </thead>
                <tbody>
                {
                    users?.map((infoe, i) =><tr key={infoe._id}>
                        <th>{i+1}</th>
                        <td>{infoe.name}</td>
                        <td>{infoe.email}</td>
                        <td>{ infoe?.
quality !== 'varifyed' && 
                            <button onClick={()=>handleVerify(infoe._id)} className='btn btn-xs btn-info'>Make Verify</button>
                            }</td>
                        <td><button onClick={()=>handleDelete(infoe._id)} className='btn btn-xs btn-warning'>Delete</button></td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;