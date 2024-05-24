import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className='px-4 pt-2 text-center text-2xl font-bold'>
                            <h1 className='text-cyan-600'>Welcome back!</h1>
                            <h1>Please login your account</h1>
                        </div>

                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-cyan-600 text-white font-semibold">Login</button>
                            </div>
                            <div>
                                <p>Don't have an account? <Link className='text-cyan-600 font-semibold' to='/register'>Please register</Link></p>
                            </div>
                        </form>

                        <div className="divider px-3"></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Login;