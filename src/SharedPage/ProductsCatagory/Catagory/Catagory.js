import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import logo from '../../../assets/laptopLogo_prev.png'


const Catagory = () => {

    const items = useLoaderData();

    return (
        <div className='w-5/12 mx-auto mt-10'>
            <h1 className='text-center font-semibold'>This is Catagory Sections</h1>


            {
                items?.map(item => <Link key={item.catagory_id} to={`/catagory/${item.catagory_id}`}>
                    <div className="card bg-base-100 shadow-xl image-full hover:w-11/12 mb-5">
                        <figure><img className='' src={item.img} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="card-title ">{item.name}</h2>
                            {/* <img className='' src={logo} alt="" /> */}
                        </div>
                    </div>
                </Link>)
            }

        </div>
    );
};

export default Catagory;