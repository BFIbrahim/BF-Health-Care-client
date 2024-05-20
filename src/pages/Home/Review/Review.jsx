import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='w-[98%] md:w-[90%] lg:w-[90%] mx-auto mb-8 mt-24'>

            <h1 className='text-3xl font-semibold border-b-2 pb-2 text-center w-[60%] mx-auto'>Patients happy to getting our service <span className='text-bold text-cyan-600'>...</span></h1>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    reviews.map((review) => (
                        <div className='shadow-md shadow-cyan-600'>
                            <SwiperSlide key={review._id} className='p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] m-8'>
                                <img className='w-14 h-14 mx-auto' src="https://i.ibb.co/ds91DDc/profile.png" alt="" />
                                <h3 className='text-center text-2xl font-bold mb-2'><span className='text-cyan-600 text-3xl font-bold'>"</span> {review.name} <span  className='text-cyan-600 text-3xl font-bold'>"</span> </h3>
                                <p className='text-center text-gray-600'>{review.message}</p>
                            </SwiperSlide>
                        </div>
                    ))
                }

            </Swiper>
        </div>
    );
};

export default Review;
