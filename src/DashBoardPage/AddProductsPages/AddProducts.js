import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { UsedContext } from '../../Context/AuthContext';

const AddProducts = () => {

    const {user}=useContext(UsedContext);

    const navigate =useNavigate()

    const { register, handleSubmit, formState: {
        errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_Key;


    const handleCreatProduct = data => {
        console.log(data)
        const image = data.image[0];

        const formData = new FormData();
        formData.append('image', image);
        fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(fact => {
                const image = fact.data.url;
                const email = user.email;
                const productName = data.productName;
                const productPrice = data.productPrice;
                const purchaseYear = data.purchaseYear;
                const condition = data.condition;
                const category = data.category;
                const resalPrice = data.resalPrice;
                const originalPrice = data.originalPrice;
                const usesYear = data.usesYear;
                const postDate = data.postDate;
                const selerName = data.selerName;
                const phoneNumber = data.phoneNumber;
                const location = data.location;
                const description = data.description;


                const products = {
                    name: productName,
                    productPrice,
                    purchaseYear,
                    img: image,
                    email,
                    condition,
                    catagory_id: category,
                    resale_price: resalPrice,
                    original_price: originalPrice,
                    uses_year: usesYear,
                    post_date: postDate,
                    seller_name: selerName,
                    phone: phoneNumber,
                    location,
                    description
                }
                console.log(products)

                fetch('http://localhost:4000/product', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(products)
                })
                    .then(res => res.json())
                    .then(infoe => {
                        console.log(infoe)
                        if (infoe.acknowledged) {
                            toast.success("Your Producte added succesfully");
                            navigate('/dashboard/myproducts')
                        } else {
                            toast.error("your producte can't added please try again")
                        }
                    })

            })
    }

    return (
        <div className="backImage" style={{ backgroundImage: `url("https://barn2.com/wp-content/uploads/2022/12/How-to-Add-Image-Uploads-for-Your-WooCommerce-Products-light-bkg-Header.png")` }}>
            <div className="hero min-h-screen hero-overlay bg-opacity-60">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white mb-5">Add Your Products</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleCreatProduct)} className="card-body">

                            {/*Product Name section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Producte Name</span>
                                </label>
                                <input {...register("productName", { required: true })} type="text" placeholder="Please Enter Your Producte Name" className="input input-bordered" />
                                {errors.productName && <span className=' text-red-500'>This section is required</span>}

                            </div>

                            {/*Product Price Section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Producte Price</span>
                                </label>
                                <input {...register("productPrice")} type="text" placeholder="Please Enter price" className="input input-bordered" />
                            </div>

                            {/* Year of Purchase section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Year of Purchase</span>
                                </label>
                                <input {...register("purchaseYear")} type="date" placeholder="Please Enter Year of Purchase" className="input input-bordered" />
                            </div>


                            {/* Producte Picture section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Producte Picture</span>
                                </label>
                                <input {...register("image")} type="file" placeholder="Please Enter Producte price" className="input input-bordered" />
                            </div>



                            {/* Condition Select Type of Users */}
                            <div className="form-control">
                                <div className="input-group grid">
                                    <label className="label ">
                                        <span className="label-text">Condition</span>
                                    </label>
                                    <select {...register("condition")} className="select input-bordered">
                                        <option>Sellect...  </option>
                                        <option>Excellent</option>
                                        <option>Good</option>
                                        <option>Fair</option>
                                        <option>Used</option>
                                        <option>New</option>
                                    </select>

                                </div>
                            </div>
                            {/* Select Type of Users */}

                            {/* Condition Select Type of Users */}
                            <div className="form-control">
                                <div className="input-group grid">
                                    <label className="label ">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <select {...register("category", { required: true })} className="select input-bordered">
                                        <option>Lenovo</option>
                                        <option>HP</option>
                                        <option>Asus</option>
                                    </select>
                                    {errors.category && <span className='text-red-500'>This field is required</span>}
                                </div>
                            </div>
                            {/* Select Type of Users */}


                            {/* Reasale Price section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Resale Price</span>
                                </label>
                                <input {...register("resalPrice")} type="text" placeholder="Please Enter Your Resal price" className="input input-bordered" />
                            </div>


                            {/* Originale Price section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Originale Price</span>
                                </label>
                                <input {...register("originalPrice")} type="text" placeholder="Please Enter originale price" className="input input-bordered" />
                            </div>


                            {/* Email section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Uses Year</span>
                                </label>
                                <input {...register("usesYear")} type="text" placeholder="Please Enter uses year" className="input input-bordered" />
                            </div>


                            {/* Post date section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Post Date</span>
                                </label>
                                <input {...register("postDate",{required: true})} type="datetime-local" placeholder="Please Enter post date" className="input input-bordered" />
                            </div>


                            {/* Seller Name section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input {...register("selerName")} type="text" placeholder="Please Enter Your name" className="input input-bordered" />
                            </div>


                            {/* Phone number section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone number</span>
                                </label>
                                <input {...register("phoneNumber")} type="text" placeholder="Please Enter Your Phone number" className="input input-bordered" />
                            </div>


                            {/* Condition section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input {...register("location")} type="text" placeholder="Please Enter Your location" className="input input-bordered" />
                            </div>


                            {/* Description section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea {...register("description")} className="textarea textarea-bordered h-24" placeholder="Pease Enter Description"></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submite</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;