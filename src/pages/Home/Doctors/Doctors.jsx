import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(response => response.json())
            .then(data => setDoctors(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='bg-cyan-600 p-2'>
            <div className='w-[98%] md:w-[95%] lg:w-[95%] mx-auto mt-5 text-center text-white'>

                <h1 className='text-3xl font-semibold border-b-2 pb-2 italic text-center w-[60%] mx-auto mb-10'>
                    <span className='text-bold text-4xl text-cyan-600 italic'>---</span> Our top experienced doctors <span className='text-bold text-cyan-600 italic text-4xl'>---</span>
                </h1>

                <Swiper
                    slidesPerView={1} // Default slides per view
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    breakpoints={{
                        640: { // Small screens and up
                            slidesPerView: 1,
                        },
                        768: { // Medium screens and up
                            slidesPerView: 2,
                        },
                        1024: { // Large screens and up
                            slidesPerView: 3,
                        },
                    }}
                    className="mySwiper"
                >
                    {doctors.map(doctor => (
                        <SwiperSlide key={doctor._id} className=' rounded-md m-8'>
                            <div>
                                <img src={doctor.imgUrl} className='w-full h-72 rounded-tr-3xl rounded-bl-3xl' alt="" />
                                <h1 className='text-2xl text-start ps-2 font-semibold text-white mt-2'>{doctor.name}</h1>
                                <ul className='text-start mt-3 ps-2'>
                                    <li><span className='font-semibold'>Specialized: </span>{doctor.specialized}</li>
                                    <li><span className='font-semibold'>Cirtificate: </span>{doctor.cirtificate}</li>
                                    <li><span className='font-semibold'>Experience: </span>{doctor.experience}</li>
                                </ul>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button className='btn bg-white mt-5 mb-5 text-bold'>View more doctors</button>
            </div>
        </div>
    );
};

export default Doctors;
