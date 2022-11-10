import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const ReviewUpdate = () => {
    const { user } = useContext(AuthContext);

    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            name,
            email,
            message
        }
    }

    return (
        <form onSubmit={handleReview} className='border-2 rounded-xl p-5 shadow-2xl mb-5'>
                <h2 className='text-4xl text-blue-600 text-center font-bold mb-4'>Update Review</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='name' type="text" placeholder="Your Name" defaultValue={user?.displayName} className="input input-bordered w-full" />
                    <input name='email' type="email" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" />
                </div>
                <textarea name='message' className="textarea textarea-bordered my-4 w-full h-40" placeholder="Your review" defaultValue={user?.message}></textarea>
                <div className='flex justify-center'>
                    <button className="btn btn-wide bg-blue-600 text-xl">Update</button>
                </div>
            </form>
    );
};

export default ReviewUpdate;