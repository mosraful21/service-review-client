import React, { useEffect, useState } from 'react';
import ServiceCard from '../Home/Services/ServiceCard';

const AllServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='border-4 rounded my-5 shadow-2xl'>
            <div className='text-center mb-4'>
                <h2 className="text-4xl text-blue-600 font-semibold m-3">All Tourist Place</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;