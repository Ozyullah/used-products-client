import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { UsedContext } from '../../Context/AuthContext';

const BookModal = ({ bookingdata, setBookingdata }) => {

    const { user } = useContext(UsedContext)

    // const { handleSubmit, register, formState: {errors}}=useForm();
    console.log(bookingdata, user);

    const handleForm=event=>{
        event.preventDefault()
        const form =event.target;
        const name =form.name.value;
        const email =form.email.value;
        const item =form.item.value;
        const price =form.price.value;
        const phone =form.phone.value;
        const location=form.location.value;

        form.reset('')

        const saving ={
            user_name:name,
            email,
            img:bookingdata?.img,
            products_name:item,
            products_price:price,
            user_phone:phone,
            present_location:location
        }
        console.log(saving)

        fetch('https://used-products-server-gold.vercel.app/booking',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(saving)
        })
        .then(res => res.json())
        .then(infoe =>{
            console.log(infoe)
            if(infoe.acknowledged){

                setBookingdata(null)
                toast.success('Your order succesfully added')
            }
           
        } 
        
        )
       
    }

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{bookingdata?.name}</h3>
                    <div>
                        <form onSubmit={handleForm} className='grid justify-center mt-5'>
                        {/* User Name sector */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' value={user?.displayName} placeholder="Your Name" className="input input-bordered w-full max-w-xs" readOnly disabled/>
                               
                            </div>
                        {/* User Email Address sector */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email Address</span>
                                </label>
                                <input type="email" name='email' value={user?.email} placeholder="Type here" className="input input-bordered w-full max-w-xs" readOnly disabled />
                               
                            </div>
                        {/* Booking items Name */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" name='item' value={bookingdata?.name} placeholder="Type here" className="input input-bordered w-full max-w-xs" readOnly disabled/>
                               
                            </div>
                        {/* Product Price */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Product Price</span>
                                </label>
                                <input type="text" name='price' value={bookingdata?.resale_price} placeholder="Type here" className="input input-bordered w-full max-w-xs" readOnly disabled/>
                               
                            </div>
                        {/* User Phone number */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Phone <small className='text-xl text-red-600'>*</small></span>
                                </label>
                                <input type="text" name='phone' placeholder="Please enter your phone number" className="input input-bordered w-full max-w-xs" required />
                               
                            </div>
                        {/* User er meeting location */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Present Location  <small className='text-red-600 text-xl'>*</small></span>
                                </label>
                                <input type="text" 
                                name='location' placeholder="Please enter your current location" className="input input-bordered w-full max-w-xs" required/>
                               
                            </div>

                            <div className="modal-action">
                                <button type='submit'><label htmlFor="booking-modal" className="btn btn-outline">submit</label></button>
                    </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookModal;