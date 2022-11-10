import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import ReviewRow from './ReviewRow';
import swal from 'sweetalert';

const Review = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://service-review-server-sable-two.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to cancel this review');
        if (proceed) {
            fetch(`https://service-review-server-sable-two.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        swal("Deleted Successfully");
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    const handleUpdate = (id) => {
        fetch(`https://service-review-server-sable-two.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(rev => rev._id !== id);
                    const approving = reviews.find(rev => rev._id === id);
                    approving.status = 'Approved';
                    const newReview = [...remaining, approving];
                    setReviews(newReview);
                }
            })
    }

    return (
        <div className="overflow-x-auto w-full my-12">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>User Info</th>
                        <th>Title and Price</th>
                        <th>Message</th>
                        <td></td>
                    </tr>
                </thead>

                <tbody>
                    {
                        reviews.map(review => <ReviewRow
                            key={review._id}
                            review={review}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                        ></ReviewRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Review;