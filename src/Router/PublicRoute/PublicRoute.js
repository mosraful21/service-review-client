import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const PublicRoute = ({ children }) => {
    const { loading } = useContext(AuthContext);

    if (loading) {
        return <div className='flex justify-center'><button className="btn loading">loading</button></div>
    }
    return children;
};

export default PublicRoute;