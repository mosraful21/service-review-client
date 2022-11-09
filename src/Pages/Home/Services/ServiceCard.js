import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { img, price, title, description, _id } = service;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl p-3">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img src={img} alt="place" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                <p className='text-orange-600 font-semibold'>Tour Cost: {price}</p>
                <p className='text-justify'><span className='font-bold'>Description:</span> {description.slice(0, 100)}...</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}>
                        <button className='border-2 rounded bg-blue-600 text-white px-4 py-1'>Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;