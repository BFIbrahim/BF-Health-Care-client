import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
            <h1 className='text-3xl font-semibold border-b-2 pb-2 italic text-center w-[60%] mx-auto mb-10'>
                <span className='text-bold text-4xl text-cyan-600 italic'>---</span> Patients happy to getting our service <span  className='text-bold text-cyan-600 italic text-4xl'>---</span>
            </h1>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    reviews.map((review) => (
                        <SwiperSlide className='px-2 text-center md:px-24 lg:px-24' key={review._id}>
                            <img className='w-14 h-14 mx-auto mb-2' src="https://i.ibb.co/ds91DDc/profile.png" alt="" />
                            <h1 className='text-3xl font-semibold mb-3'>{review.name}</h1>
                            <p>{review.message}</p>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Review;
