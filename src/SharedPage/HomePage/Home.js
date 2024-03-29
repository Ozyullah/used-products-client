import React from 'react';
import Advertised from './Advertised';
import Catagory from '../ProductsCatagory/Catagory/Catagory';
import { useContext } from 'react';
import { UsedContext } from '../../Context/AuthContext';
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Home = () => {
    const { user } = useContext(UsedContext)


// carousel sector start
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
// carousel sector start

    // Advertised loader section 

    const {data: goods=[]}=useQuery({
        queryKey: ['advertising'],
        queryFn: async()=>{
            const res =await fetch('https://used-products-server-gold.vercel.app/advertising');
            const data =await res.json();
            console.log(data)
            return data;
            
        }
    })

    // Review manage section
    const handleReview = event => {
        event.preventDefault()
        const form = event.target;
        const review = form.review.value;
        const photo = user.photoURL;

        form.reset('')

        console.log(review, photo)

        const counsel ={
            review,
            photo
        }

        fetch('https://used-products-server-gold.vercel.app/review',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(counsel)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                toast.success('Succesfully added Review')
            }
        })
    }

    const {data:allreviews =[]}= useQuery({
        queryKey: ['allreviews'],
        queryFn: ()=> fetch('https://used-products-server-gold.vercel.app/allreviews')
        .then(res => res.json())
    })

    console.log(allreviews)
    return (
        <div>
            {/* banner sector started */}
            <div className="hero min-h-screen" style={{ backgroundImage: `url(https://www.intel.co.uk/content/dam/www/central-libraries/us/en/images/2022-05/laptop-marquee-16x9.png.rendition.intel.web.864.486.png)` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Its Used Laptops Deals</h1>
                        <p className="mb-5">A laptop is a personal computer that can be easily moved and used in a variety of locations. Most laptops are designed to have all of the functionality of a desktop computer, which means they can generally run the same software and open the same types of files.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            {/* banner sector ended */}



      {/* <!-- Inner --> */}


      {
                goods?.length === 0  ? '' : 
                    <div className=''>
                        <h3 className='font-bold text-center mt-8 text-3xl'>Our products</h3>
                        <Carousel className='mt-10 w-10/12 m-auto' responsive={responsive}>
                    {
                    goods?.map((item, i)=><Advertised 
                        key={item._id}
                        item={item}
                        i={i}
                        ></Advertised>)
                    }
                    </Carousel>
                    </div>
            }

      
      
      

            <div>
                <Catagory></Catagory>
            </div>
            {/* User Review section started */}

            <div className=' bg-slate-100'>
                <h1 className='text-center font-semibold'>Our Customers Reviews</h1>
                <p className='text-center mb-5 w-5/12 m-auto'>Our website will see important reviews of users. Express your important opinion here.</p>
                <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
                    <div className="carousel-inner relative w-6/12 mx-auto overflow-hidden mb-5">
                            {
                                allreviews.map(option =><div className="carousel-item active relative float-left w-full bg-slate-100 rounded-md" key={option._id}>
                                    <div className=''>
                                    <img src={option.photo} 
                                    className=" rounded-full w-11 items-center grid" alt="" />
                                    <p>{option.review}</p>
                                    </div>
                                </div>)
                            }
                        
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
                {/* The button to open modal */}
                <div >
                    <label htmlFor="review-modal" className=' grid align-middle btn btn-outline btn-secondary border-none font-bold'>Add Reviews</label>
                </div>


                {/* Put this part before </body> tag */}
                <input type="checkbox" id="review-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                    <label htmlFor="review-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                        <form onSubmit={handleReview} action="">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Write your Review</span>
                                </label>
                                <input type="text" name='review' placeholder="Write your opinion" className="input input-bordered w-full max-w-xs" />

                            </div>
                            <div className="modal-action">
                                <button>
                                    <label htmlFor="review-modal" className="btn">ok</label>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;