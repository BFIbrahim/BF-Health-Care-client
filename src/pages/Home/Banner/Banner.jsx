import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='md:grid grid-cols-2 gap-14  items-center max-w-[95%] mx-auto mt-8'>
                <div>
                    <h1 className='font-sans text-2xl md:text-4xl lg:text-4xl font-bold'>Care your health and your families health with <span className='text-cyan-600'>BF HealthCare</span></h1>

                    <p className='mt-5 text-gray-600'>
                        BF HealthCare offers comprehensive, patient-centric medical services with advanced technology and skilled professionals, ensuring high-quality care and outcomes
                    </p>

                    <button className='btn bg-cyan-600 mt-5 text-white font-semibold hover:text-gray-800'>Book appoinments</button>

                    <button className='btn bg-transparent mt-5  ms-5 border-cyan-600 border-2 font-semibold hover:bg-cyan-600 hover:border-none hover:text-white'>Find Doctors</button>

                    <div className='flex gap-14 mt-10 max-w-[95%] mx-auto'>
                        <div className=''>
                            <h1 className=' text-3xl font-bold'>520+</h1>
                            <h3>Reviews</h3>
                        </div>

                        <div className=''>
                            <h1 className='text-3xl font-bold'>100+</h1>
                            <h3>Experenced Doctor</h3>
                        </div>
                    </div>
                </div>

                <div>
                    <img className='max-w-full mx-auto' src="https://i.ibb.co/MkbCyJ0/doctors-removebg-preview.png" alt="" />
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;