import React from 'react';

const PatientProfile = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-cyan-600 text-base-content">
                        {/* Sidebar content here */}
                        <img src="https://i.ibb.co/ds91DDc/profile.png" className='w-24 h-24 mx-auto ' alt="" />
                        <h1 className='text-2xl text-center text-white font-semibold'>User name</h1>
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default PatientProfile;