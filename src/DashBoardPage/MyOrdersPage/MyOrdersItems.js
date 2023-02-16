import React from 'react';
import { Link } from 'react-router-dom';

const MyOrdersItems = ({order,i}) => {
    console.log(order)
    const {products_name, products_price, img, _id, paid}=order;
    return (
        
            <tbody>

                <tr>
                    <th>
                       {i+1}
                    </th>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={img} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">
                                    {products_name}
                                </div>
                                
                            </div>
                        </div>
                    </td>
                    <td>
                        {products_price}
                        <br />
                        
                    </td>
                    
                    <th>
                        { !paid &&
                            <Link to={`/dashboard/booking/payment/${_id}`}><button className="btn btn-xs btn-info">PayNow</button></Link>
                        }
                        {paid === 'succesfull' &&
                            <p className='text-green-400 font-semibold'>paid</p>
                        }
                    </th>
                </tr>

            </tbody>
        
    );
};

export default MyOrdersItems;