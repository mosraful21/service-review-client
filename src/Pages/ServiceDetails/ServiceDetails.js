import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import swal from 'sweetalert';
import UserServiceReview from './UserServiceReview';

const ServiceDetails = () => {
    const { _id, img, title, price, description } = useLoaderData();
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const address = form.address.value;
        const phone = form.phone.value;
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            price,
            name,
            email,
            address,
            phone,
            message
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    swal('Review placed successfully');
                    form.reset();
                }
            })
            .catch(error => console.error(error))
    }

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
                        <Link to='/payment'><button className="btn glass text-pink-600">payment Now</button></Link>
                    </div>
                </div>
                <div className="overflow-x-auto w-full mb-12 px-6">
                    <h2 className='text-3xl text-blue-600 font-bold text-center mb-4'>Users Reviews</h2>
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>User Info</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews.map(review => <UserServiceReview
                                    key={review._id}
                                    review={review}
                                ></UserServiceReview>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {/* section-2: Review Section */}
            <form onSubmit={handleReview} className='border-2 rounded-xl p-5 shadow-2xl mb-5'>
                <h2 className='text-4xl text-blue-600 text-center font-bold mb-4'>Your Review</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='name' type="text" placeholder="Your Name" defaultValue={user?.displayName} className="input input-bordered w-full" />
                    <input name='email' type="email" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                    <input name='address' type="text" placeholder="Address" className="input input-bordered w-full" />
                    <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                </div>
                <textarea name='message' className="textarea textarea-bordered my-4 w-full h-40" placeholder="Your review"></textarea>
                <div className='flex justify-center'>
                    <button className="btn btn-wide bg-blue-600 text-xl">Submit</button>
                </div>
            </form>

        </div>
    );
};

export default ServiceDetails;