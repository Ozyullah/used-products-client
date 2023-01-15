import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiFillMobile } from 'react-icons/ai'


const Catagory = () => {

    const items=useLoaderData()
    
    return (
        <div className='w-7/12 mx-auto mt-10'>
            <h1 className='text-center font-semibold'>This is Catagory Sections</h1>

            <div className='flex'>
                <div className='grid'>
                    {
                        items.map(item =><Link key={item._id} to={'/'} className=' text-blue-400 flex items-center'><small><AiFillMobile/></small>{item.name }</Link>)
                    }
                
                </div>
                <div className='m-10'>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catagory;