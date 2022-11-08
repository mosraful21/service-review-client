import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const ServiceDetails = () => {
    const { img, title, price, description } = useLoaderData();
    const {user} = useContext(AuthContext);

    return (
        <div>
            {/* section-1: Services details Information */}
            <div className="card card-compact w-full bg-base-100 shadow-xl my-12">
                <figure><img src={img} alt="place" /></figure>
                <div className="card-body mx-6">
                    <h2 className="card-title text-3xl">{title}</h2>
                    <p className='font-bold text-orange-400'>Tour Cost: {price}</p>
                    <p className='text-justify'><span className='font-bold'>Description:</span> {description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            {/* section-2: Review Section */}
            <form className='border-2 rounded-xl p-5 shadow-2xl mb-5'>
                <h2 className='text-4xl text-center font-bold mb-4'>Tourist Review</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input type="text" placeholder="Your Name" defaultValue={user?.displayName} className="input input-bordered w-full" />
                    <input type="email" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                    <input type="text" placeholder="Address" className="input input-bordered w-full" />
                    <input type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                </div>
                <textarea className="textarea textarea-bordered my-4 w-full h-40" placeholder="Your review"></textarea>
                <Link to='' className='flex justify-center mb-5'><button className="btn btn-wide bg-blue-600 text-xl">Submit</button></Link>
            </form>

        </div>
    );
};

export default ServiceDetails;