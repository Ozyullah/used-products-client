import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookModal from '../../BookingPage/BookModal';
import CatagoryDetails from './CatagoryDetails';
import CatagoryItemsShown from './CatagoryItemsShown';

const CatagoryItems = () => {

    const uses = useLoaderData()

    const [bookingdata, setBookingdata]=useState(null)

    const [detailsdata, setDetailsdata]=useState(null)

    console.log(uses)
    return (
        <div>
            <div className=' w-9/12 mx-auto mt-5 mb-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    uses.map(use => <CatagoryItemsShown
                        key={use._id}
                        use={use}
                        setBookingdata={setBookingdata}
                        setDetailsdata={setDetailsdata}
                    ></CatagoryItemsShown>)
                }
            </div>

            <BookModal
            bookingdata={bookingdata}
            setBookingdata={setBookingdata}
            ></BookModal>

            {/* <CatagoryDetails
            detailsdata={detailsdata}
            setDetailsdata={setDetailsdata}
            ></CatagoryDetails> */}
        </div>
    );
};

export default CatagoryItems;