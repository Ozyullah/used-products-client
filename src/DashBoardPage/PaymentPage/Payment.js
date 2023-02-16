import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutPayment from './CheckoutPayment';

const Payment = () => {

    const stripePromise = loadStripe(process.env.REACT_APP_PAYMENT_PK);
    

    const takaes =useLoaderData();
    console.log(takaes)

    const {products_name,products_price, present_location, user_name, user_phone}=takaes;
    return (
        <div className=' w-9/12 m-auto mb-5'>
            <div className='flex justify-self-start mt-10'>
                <p >Product Name: {products_name}</p><p>Price: <small className='font-bold text-xl'>৳{products_price}</small></p><p>Current Location:{present_location}</p><p>Buyer Name:{user_name}</p><p>Buyer phone:{user_phone}</p>
            </div>
            <div className='mt-10 w-96 my-5'>
                <Elements stripe={stripePromise}>
                    <CheckoutPayment
                    takaes={takaes}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;