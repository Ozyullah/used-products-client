import React from 'react';

const CatagoryItemsShown = ({ use }) => {

    const { img, name, location, original_price, phone, post_date, resale_price, uses_year, seller_name} = use;
    console.log(use)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl w-52" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>

                    <p>Seler Name: {seller_name}</p>
                    <p>Location: {location}</p>
                    <p>Original price: {original_price}</p>
                    <p>Phone: {phone}</p>
                    <p>Post date: {post_date}</p>
                    <p>Resale price: {resale_price}</p>
                    <p>Uses year: {uses_year}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatagoryItemsShown;