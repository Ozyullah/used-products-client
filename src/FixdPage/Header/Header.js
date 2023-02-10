import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/tradeslogo.png';
import profile from '../../assets/profilePic.png';
import { UsedContext } from '../../Context/AuthContext';
import './Header.css'


const Header = () => {

    const {user, logOut}=useContext(UsedContext);
    console.log(user)

    const handleLogOut =()=>{
        logOut()
        .then(()=>{})
        .catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div className="navbar-position">
            <div className="navbar navbar-position bg-blue-300">
                <div className="flex-1">
                    <img className='w-10' src={logo} alt="" />
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">Used Laptop Sales</Link>
                </div>

                {/* Link section started */}
                <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li tabIndex={0}>
                        <Link to={'/dashboard'}>
                            Dash Board
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>


                <div className="flex-none gap-2">
                    <div className="form-control" id='searceBar'>
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {user?.uid ? <img src={user.photoURL} alt=''/> : <Link to={'/login'} title='Enter for Login'><img src={profile} alt='' /></Link>}
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><button onClick={handleLogOut}>Logout</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;