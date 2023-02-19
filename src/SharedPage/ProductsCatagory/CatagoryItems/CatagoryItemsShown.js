import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { HiShieldCheck } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const CatagoryItemsShown = ({ use, setBookingdata, setDetailsdata}) => {

    const { data: facts = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://used-products-server-gold.vercel.app/users');
            const data = await res.json();
            console.log(data)
            return data;
        }
    })


    const { img, name, location, original_price, phone, post_date, resale_price, uses_year, seller_name, productPrice, _id } = use;
    console.log(use)
    return (
        <div>

            <div className=" bg-base-100 shadow-xl">
                <figure className="">
                    <img src={img} alt="Shoes" className=" rounded-md h-auto" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='mt-5'>
                        <p>Posted: {post_date}</p>
                        <p>{location}</p>
                    </div>
                    <hr />

                    <div>
                        <p className=' font-bold text-sky-600'>TK  {productPrice || resale_price}</p>
                        <div className='flex gap-0.5 '>
                            <p>For sale by  {seller_name}</p>
                            {
                                facts.map(fact => <div key={fact._id}>

                                    {
                                        fact?.email === use?.email && fact.quality === 'varifyed' ? <span className='text-blue-600 justify-center'><HiShieldCheck /></span> : ''
                                    }
                                </div>)
                            }
                        </div>
                    </div>
                    <hr />

                    <p className='flex justify-between'>Original price:<span className=''>৳ {original_price}</span></p>
                    <p className='flex justify-between'>Phone: <span>{phone}</span></p>

                    <p className='flex justify-between'>Resale price:<span>৳ {resale_price}</span></p>
                    <p className='flex justify-between'>Uses year: <span>{uses_year}</span></p>
                    <div className="card-actions mt-5 justify-between">
                        <label htmlFor="booking-modal"
                            onClick={() => setBookingdata(use)}
                            className="btn btn-sm btn-outline text-sky-500">Book Now</label>

                            <Link to={`/catagoryDetails/${_id}`}>
                            <button  className='btn btn-sm btn-outline text-sky-500'>More details</button>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatagoryItemsShown;