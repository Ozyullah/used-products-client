import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { UsedContext } from '../Context/AuthContext';
import './SignUp.css'
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from '../hooks/useToken';


const SignUp = () => {

    const provider = new GoogleAuthProvider();

    const navigate = useNavigate();

    const { user, createUser, addedUpdateUser, loginWithGoogle } = useContext(UsedContext)

    const [userEmail, setUserEmail]=useState('')
    console.log(userEmail)
    const [token]=useToken(userEmail);
    console.log(token)
    

    // if(token){
    //     console.log(token)
    //     // navigate('/')
    // }

    const { register, handleSubmit, formState: { errors } } = useForm();



    const handleCreateUser = data => {

        const email = data.email;
        const password = data.password;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                {
                    user && toast.success("Succesfully added you")
                }
                const displayName = data.name;
                const photoURL = data.image;

                addedUpdateUser(displayName, photoURL)
                    .then(() => {
                        const role= data.type;
                        puteUser(email, displayName, photoURL, role);
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            })
            .catch((error) => {
                {
                    error && toast.error("firebaseError")
                }
            })

    }



    const handlegoogleLogin = () => {
        loginWithGoogle(provider)
            .then((result) => {
                const email =result.user.email;
                const displayName =result.user.displayName;
                const photoURL =result.user.photoURL;

                puteUser(email, displayName, photoURL)
                const user = result.user;
                {
                    user && toast.success("Succesfully added your account")
                }

            })
            .catch((error) => {
                {
                    error && toast.error("firebaseError", error.message)
                }
            })
    }



    const puteUser = (email, displayName, photoURL, role) => {

        const addingUser = {
            email,
            name: displayName,
            img: photoURL,
            role
        }
        fetch(`http://localhost:4000/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addingUser)
        })
        .then(res =>res.json())
        .then(data => {
            setUserEmail(email)
            navigate('/')
        })

        
    }


    return (
        <div className="backImage" style={{ backgroundImage: `url("https://images.mansionglobal.com/im-628924?width=1299&height=866")` }}>
            <div className="hero min-h-screen hero-overlay bg-opacity-60">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white mb-5">Sign Up</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleCreateUser)} className="card-body">

                            {/* Name section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", {
                                    required: "Name is required",
                                    minLength: { value: 4, message: "name mustbe meningfull" }
                                })} placeholder="Please Enter Your Name" className="input input-bordered" />
                                {
                                    errors.name && <p className='text-red-500'>{errors.name?.message}</p>
                                }
                            </div>

                            {/* Photo Section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input {...register("image")} type="photo" placeholder="Please Enter Image" className="input input-bordered" />
                            </div>

                            {/* Email section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email")} type="email" placeholder="Please Enter Your Email Address" className="input input-bordered" />
                            </div>

                            {/* Password section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password")} type="password" placeholder="******" className="input input-bordered" />

                                {/* Select Type of Users */}
                                <div className="form-control">
                                    <div className="input-group grid">
                                        <label className="label">
                                            <span className="">Chosse Type</span>
                                        </label>
                                        <select {...register("type")}  className="select select-bordered">
                                            <option>Pick category</option>
                                            <option>Seller</option>
                                            <option>User</option>
                                        </select>

                                    </div>
                                </div>
                                {/* Select Type of Users */}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Signup</button>
                            </div>
                        </form>

                        <div className='text-center'>
                            <button onClick={handlegoogleLogin}><FcGoogle /></button>
                            <button className='ml-3 text-sky-500'><AiFillGithub /></button>
                        </div>

                        <p className='text-center mb-5'>Alredy you have an account <Link to={'/login'} className='text-blue-500'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;