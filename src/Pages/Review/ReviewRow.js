import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewRow = ({ review, handleDelete, handleEdit }) => {
    const { _id, name, email, serviceName, price, message, service } = review;
    const [reviewService, setReviewService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))
    }, [service])


    return (
        <tr>
            <th></th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-36 h-24">
                            {
                                reviewService?.img &&
                                <img src={reviewService.img} alt="Photos" />
                            }
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-sm opacity-50">{email}</div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>{message}</td>
            <th>
                <label>
                    <Link to='/reviewUpdate' className='btn btn-active btn-primary mx-3'>Update</Link>
                    <button onClick={() => handleDelete(_id)} className='btn btn-active btn-secondary'>Delete</button>
                </label>
            </th>
        </tr>
    );
};

export default ReviewRow;