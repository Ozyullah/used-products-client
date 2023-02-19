import React from 'react';
import { toast } from 'react-hot-toast';

const ReportedTable = ({item, refetch}) => {


    const {img, name, phone, seller_name, post_date, _id}=item;
    console.log(item)

    const handleReportedProduct =(id)=>{
        fetch(`https://used-products-server-gold.vercel.app/productsDelete/${id}`,{
            method: 'DELETE'
        })
        .then(res =>res.json())
        .then(data =>{
            
            toast.success('Reported item Succesfully removed')
            refetch()
        })
    }
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
                <td><button onClick={()=>handleReportedProduct(_id)} className='btn btn-xs btn-error'>Delete</button></td>
                
            </tr>
        </tbody>

    );
};

export default ReportedTable;