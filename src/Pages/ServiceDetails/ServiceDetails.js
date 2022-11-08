import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { img, title, price, description } = useLoaderData();

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
            

        </div>
    );
};

export default ServiceDetails;