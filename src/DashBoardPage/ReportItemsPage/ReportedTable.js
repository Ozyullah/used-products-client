import React from 'react';

const ReportedTable = ({item}) => {


    const {img, name, phone, seller_name, post_date}=item;
    console.log(item)
    return (
        <tbody>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">Posted {post_date}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {seller_name}
                    <br />
                    <span className="badge badge-ghost badge-sm">{phone}</span>
                </td>
                <td><button className='btn btn-xs btn-error'>Delete</button></td>
                
            </tr>
        </tbody>

    );
};

export default ReportedTable;