import React from 'react';

const UserServiceReview = ({ review }) => {
    const {name, email, message } = review;
    return (
        <tr>
            <th></th>
            <td>
                <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-sm opacity-50">{email}</div>
                </div>
            </td>
            <td>{message}</td>
        </tr>
    );
};

export default UserServiceReview;