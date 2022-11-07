import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { img, price, title, _id } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-3">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl, text-orange-600 font-semibold'>Price: {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`} className='w-4 h-4'>
                        <ArrowRightIcon></ArrowRightIcon>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;