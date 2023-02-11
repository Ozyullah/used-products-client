import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { UsedContext } from '../../Context/AuthContext';
import MyProductsItems from './MyProductsItems';

const MyProducts = () => {

    const { user } = useContext(UsedContext);

    const { data: goods = [user.email] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4000/products?email=${user.email}`)
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    return (
        <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Sales Status</th>
                            <th></th>
                        </tr>
                    </thead>

            {
                goods.map((item,i) =><MyProductsItems 
                key={item._id}
                item={item}
                i={i}
                ></MyProductsItems>)
            }
            {/* <div className="overflow-x-auto w-full">
                <table className="table w-full"> */}

                    {/* <!-- head --> */}
                    {/* <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Sales Status</th>
                            <th></th>
                        </tr>
                    </thead> */}
                        {/* <!-- row 1 --> */}
                        {/* {
                            goods?.map((item, i) =><tbody key={item._id}>
                            <tr>
                                <th>
                                <label>
                                    {i+1}
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{item.name}</div>
                                        <div className="text-sm opacity-50">Brand: {item.catagory_id}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Product salle Price: ৳{
                                    item?.productPrice === item.resale_price ? <p>{item.productPrice}</p> : <p>Product Price is not match</p>
                                }</span>
                            </td>
                            <td><button>available</button></td>
                            <td><button>Sold</button></td>
                            <th>
                                <button className="btn btn-ghost btn-xs">advertise</button>
                            </th>
                        </tr>
                        </tbody>)}

                    
                </table>
            </div> */}
            </table>
        </div>
    );
};

export default MyProducts;


