import React, { useContext } from 'react';
import { UsedContext } from '../Context/AuthContext';
import './SignUp.css'


const SignUp = () => {

    const {createUser}=useContext(UsedContext);

    const handleCreateUser =event =>{
        event.preventDefault();
        const form =event.target;
        console.log(form)
    }


    return (
        <div className="backImage">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">

                            {/* Name section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Please Enter Your Name" className="input input-bordered" />
                            </div>

                            {/* Photo Section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="Please Enter Image" className="input input-bordered" />
                            </div>

                            {/* Email section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Please Enter Your Email Address" className="input input-bordered" />
                            </div>

                            {/* Password section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="******" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Signup</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;