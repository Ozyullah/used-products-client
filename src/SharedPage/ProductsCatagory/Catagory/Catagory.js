import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import logo from '../../../assets/laptopLogo_prev.png'


const Catagory = () => {

    const items = useLoaderData();

    return (
        <div className='w-5/12 mx-auto mt-10'>
            <h1 className='text-center font-semibold'>This is Catagory Sections</h1>

            {/* <div className=''>
                {
                    items?.map(item => <div key={item._id} className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <Link to={'/'} className=' text-blue-400 flex items-center'><small><AiFillMobile /></small>{item.name}</Link>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }

            </div> */}


            {
                items?.map(item => <Link to={'/'}>
                    <div className="card bg-base-100 shadow-xl image-full  hover:w-11/12 mb-5">
                        <figure><img src={item.img} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="card-title ">{item.name}</h2>
                            <img className='' src={logo} alt="" />
                        </div>
                    </div>
                </Link>)
            }

        </div>
    );
};

export default Catagory;