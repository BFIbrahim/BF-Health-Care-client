import React from 'react';
import { FaNotesMedical } from "react-icons/fa";


const About = () => {
    return (
        <div className='font-sans max-w-[95%] mx-auto mt-8 mb-10'>
            <div className='md:grid grid-cols-2 gap-10 items-center'>
                <div>
                    <img src="https://i.ibb.co/8NKrr2K/Home-about.png" alt="" />
                </div>

                <div>
                    <h5 className='text-cyan-600 mb-2 font-bold mt-3'>About us</h5>
                    <h1 className='text-4xl font-bold mb-3'>You and your families healthcare solutions</h1>
                    <p>BF HealthCare offers comprehensive, patient-centric medical services with advanced technology and skilled professionals, ensuring high-quality care and outcomes</p>

                    <div className='lg:flex  gap-5 mt-5'>
                        <div>
                            <p className='flex gap-2 items-center mb-2'>
                                <FaNotesMedical className='text-cyan-600 text-2xl ' />
                                <span className='font-semibold'>Best medical support</span>
                            </p>
                            
                            <p className='flex gap-2 items-center mb-2'>
                                <FaNotesMedical className='text-cyan-600 text-2xl ' />
                                <span className='font-semibold'>Live consaltation</span>
                            </p>

                            <p className='flex gap-2 items-center'>
                                <FaNotesMedical className='text-cyan-600 text-2xl ' />
                                <span className='font-semibold mb-2 lg:mb-0 lg:mb-0'>24/7 support</span>
                            </p>
                        </div>
                        <div>
                            <p className='flex gap-2 items-center mb-2'>
                                <FaNotesMedical className='text-cyan-600 text-2xl ' />
                                <span className='font-semibold'>Expert Nurse team</span>
                            </p>

                            <p className='flex gap-2 items-center mb-2'>
                                <FaNotesMedical className='text-cyan-600 text-2xl ' />
                                <span className='font-semibold'>Share personal opinion</span>
                            </p>

                            <p className='flex gap-2 items-center'>
                                <FaNotesMedical className='text-cyan-600 text-2xl ' />
                                <span className='font-semibold'>Help to get medicine</span>
                            </p>
                        </div>
                    </div>

                    <button className='btn mt-4 bg-cyan-600 text-white font-semibold hover:text-gray-900'>View more about us</button>
                </div>
            </div>
        </div>
    );
};

export default About;