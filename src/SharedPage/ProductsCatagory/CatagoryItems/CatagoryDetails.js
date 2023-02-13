import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiFillFastBackward } from 'react-icons/ai';
import { UsedContext } from '../../../Context/AuthContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const CatagoryDetails = () => {

    const {user}=useContext(UsedContext)

    const data = useLoaderData()
    console.log(data)

    const { handleSubmit, register, formState: {errors}}=useForm()

    // const handleReportProducts=()=>{
        
    // }


    const handleReportStatus=(id)=>{
        fetch(`http://localhost:4000/productsDetailsRole/${id}`,{
            method: 'PUT'
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                toast.success('Succesfully Report count')
            }
        })
    }
    return (
        <div className="card bg-base-100 shadow-xl mt-5">
            <figure><img src={data.img} alt="Shoes" /></figure>
            <div className="card-body px-32 py-16">
                <h2 className="card-title mb-5">{data.name}</h2>
                <div>
                    <p>Posted {data.post_date}</p>
                    <p>{data.location}</p>
                </div>
                <hr />
                <div>
                    <p className=' font-semibold text-sky-600'> Tk {
                        data.productPrice === data.resale_price ? data.productPrice : ''
                    }</p>
                    <p>For sale by {data.seller_name}</p>
                </div>
                <hr />
                <p className='flex justify-between mb-2'>Phone number:<span>{data.phone}</span></p>
                <p className='flex justify-between mb-2'>Purchese Year<span>{data.purchaseYear}</span></p>
                <p className='flex justify-between mb-2'>Uses Time <span>{data.uses_year}</span></p>
                <p className='flex justify-between mb-2'>Original Price <span>{data.original_price}</span></p>
                <p className='flex justify-between mb-2'>Catagory <span>{data.catagory_id}</span></p>
                <p className='flex justify-between mb-2'>Condition <span>{data.condition}</span></p>
                <p className='grid mb-6'>Descriptions:<span className='text-blue-300'>{data.description}</span></p>

                <div className="card-actions justify-between">
                    <Link to={`/`} className="btn text-sky-500 btn-outline btn-sm"><AiFillFastBackward /></Link>
                    <label onClick={()=>handleReportStatus(data._id)} htmlFor="report-modal" className="btn text-sky-500 btn-outline btn-sm">Report</label>
                </div>
            </div>

                    {/* Modal button */}
            {/* <label htmlFor="report-modal" className="btn text-sky-500 btn-outline btn-sm">Report</label> */}
            {/* Put this part before </body> tag */}
            {/* <input type="checkbox" id="report-modal" className="modal-toggle" />
            <div className="modal">
            
                <div className="modal-box">
                <label htmlFor="report-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Please Write your resone</h3>
                    <form onSubmit={handleSubmit(handleReportProducts)} className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register('email')} value={user.email} readOnly disabled  className="input input-bordered w-full max-w-xs" />

                        <label className="label">
                            <span className="label-text">What is resone</span>
                        </label>
                        <input type="text" {...register('reportType')} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        
                    </form>
                    <div className="modal-action">
                        <label htmlFor="report-modal" className="btn">submit</label>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default CatagoryDetails;