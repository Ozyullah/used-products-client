import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Dashboar = () => {

    const {data: infoes = []}= useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res =await fetch('https://used-products-server-gold.vercel.app/users');
            const data =await res.json();
            return data;
        }
    })



    const {data: products = []}= useQuery({
        queryKey: ['products'],
        queryFn: async() =>{
            const res =await fetch('https://used-products-server-gold.vercel.app/allProducts');
            const data =await res.json();
            return data;
        }
    })


    const { data: sellers = []}=useQuery({
        queryKey: ['sellers'],
        queryFn: async()=>{
            const res =await fetch('https://used-products-server-gold.vercel.app/sellers?role=Seller');
            const data =await res.json()
            return data;
        }
    })
    return (
        <div>
            <p className='font-bold text-center m-10'>DASHBOARD</p>

            <div className='bg-cyan-200 w-5/6 text-center m-auto p-10 rounded-md'>
                <h3 className='mb-3'>Quantity of Users</h3>
            <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":infoes.length}}>{infoes.length}</div>
            </div>

            <div className='bg-cyan-200 w-5/6 text-center m-auto p-10 rounded-md mt-10'>
                <h1 className='mb-3'>Total Products</h1>
                <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":products.length}}>{products.length}</div>
            </div>


            <div className='bg-cyan-200 w-5/6 text-center m-auto p-10 rounded-md mt-10'>
                <h1 className='mb-3'>Quantity of Sellers</h1>
                <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":sellers.length}}>{sellers.length}</div>
            </div>
        </div>
    );
};

export default Dashboar;