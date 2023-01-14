import React from 'react';
import Advertised from './Advertised';
import img from '../../assets/Laptopimages.jpg'

const Home = () => {
    return (
        <div>
            {/* banner sector started */}
            <div className="hero min-h-screen" style={{ backgroundImage: `url(https://www.intel.co.uk/content/dam/www/central-libraries/us/en/images/2022-05/laptop-marquee-16x9.png.rendition.intel.web.864.486.png)` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Used Laptops</h1>
                        <p className="mb-5">A laptop is a personal computer that can be easily moved and used in a variety of locations. Most laptops are designed to have all of the functionality of a desktop computer, which means they can generally run the same software and open the same types of files.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            {/* banner sector ended */}

            <div>
                <Advertised></Advertised>
            </div>

            <div>
                Used Products Catagory
            </div>
            {/* User Review section started */}

            <div>
                <h1 className='text-center'>User Review</h1>
                <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
                    <div className="carousel-inner relative w-6/12 mx-auto overflow-hidden">
                        <div className="carousel-item active relative float-left w-full">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                                className="block w-full"
                                alt="Wild Landscape"
                            />
                        </div>
                        <div className="carousel-item relative float-left w-full">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                                className="block w-full"
                                alt="Camera"
                            />
                        </div>
                        <div className="carousel-item relative float-left w-full">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                                className="block w-full"
                                alt="Exotic Fruits"
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;