import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

const MyProductsItems = ({ item, i }) => {

    const [btndis, setBtndis]=useState(null)

    console.log(btndis)
    console.log(item)
    const { name, catagory_id, img, _id, condition, description, email, location, original_price, phone, post_date, productPrice, purchaseYear, resale_price, seller_name, uses_year, quantity } = item;

    const { data: bookings = [name], refetch} = useQuery({
        queryKey: ['bookingQuantity'],
        queryFn: async () => {
            const res = await fetch(`https://used-products-server-gold.vercel.app/bookingQuantity?products_name=${name}`)
            const data = await res.json();
            console.log(data)
            return data;
        }
    })


    const handleAdvertised = () => {
        const advertis = {
            name,
            catagory_id,
            img,
            condition,
            description,
            email,
            location,
            original_price,
            phone,
            post_date,
            productPrice,
            purchaseYear,
            resale_price,
            seller_name,
            uses_year,
            quantity
        }
        console.log(advertis)
        fetch(`https://used-products-server-gold.vercel.app/advertise`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advertis)
        })
            .then(res => res.json())
            .then(idea => {
                if(idea.acknowledged){
                    toast.success('Advertise Product succesfully added')
                    setBtndis(idea.acknowledged)
                    refetch()
                }
            })
    }


    const handleProductsDelete=(id)=>{
        fetch(`https://used-products-server-gold.vercel.app/productsDelete/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount > 0){
                toast.success('Your Product succesfully deleted')
                refetch()
            }
        })
    }

    console.log(item?.quantity)

    console.log(bookings.length.toString())

    console.log(bookings)

    return (
        <tbody>
            <tr>
                <th>
                    <label>
                        {i + 1}
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">Brand: {catagory_id}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {email}
                    <br />
                    <span className="badge badge-ghost badge-sm">Product salle Price: ৳{
                        item?.productPrice === item.resale_price ? <p>{item.productPrice}</p> : <p>Product Price is not match</p>
                    }</span>
                </td>
                {
                    bookings?.length.toString() === item?.quantity ? <td key={bookings.length}><button className={'bg-orange-500 btn-ghost btn-xs btn text-white'}>Sold</button></td> : <td><button className={' bg-success btn-ghost btn-xs btn text-white'}>available</button></td>
                }


                <th>
                    {
                        !btndis ? <button onClick={()=>handleAdvertised(_id)} className="btn btn-ghost btn-xs bg-blue-400 text-white">advertise</button> : ''
                    }
                </th>

                <th>
                    <button onClick={()=>handleProductsDelete()} className='btn btn-xs btn-error'>Delete</button>
                </th>
            </tr>
        </tbody>

    );
};

export default MyProductsItems;


