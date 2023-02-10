import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { HiShieldCheck } from 'react-icons/hi';

const CatagoryItemsShown = ({ use, setBookingdata }) => {

    const { data: facts = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:4000/users');
            const data = await res.json();
            console.log(data)
            return data;
        }
    })


    const { img, name, location, original_price, phone, post_date, resale_price, uses_year, seller_name } = use;
    console.log(use)
    return (
        <div>

            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl w-52" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex gap-1'>
                    <p>Seler Name: {seller_name}</p>
                    {
                        facts.map(fact => <div key={fact._id}>
                            
                            {
                                fact?.email === use?.email && fact.quality === 'varifyed' ? <span className='text-blue-600 justify-center'><HiShieldCheck /></span> : ''
                            }
                        </div>)
                    }
                    </div>
                    
                    <p>Location: {location}</p>
                    <p>Original price:৳ {original_price}</p>
                    <p>Phone: {phone}</p>
                    <p>Post date: {post_date}</p>
                    <p>Resale price:৳ {resale_price}</p>
                    <p>Uses year: {uses_year}</p>
                    <div className="card-actions">
                        <label htmlFor="booking-modal"
                            onClick={() => setBookingdata(use)}
                            className="btn btn-outline text-sky-500">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatagoryItemsShown;