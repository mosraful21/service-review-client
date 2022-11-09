import React from 'react';
import img1 from '../../../assets/images/team/1.jpg';
import img2 from '../../../assets/images/team/2.jpg';
import img3 from '../../../assets/images/team/3.jpg';

const Team = () => {
    return (
        <div className='border-2 rounded-xl mt-12 mb-6'>
            <h2 className='text-3xl text-blue-600 font-bold text-center'>Our Team Members</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 md:gap-4 px-4'>
                <div className="card card-side bg-base-100 w-full my-6 shadow-xl">
                    <figure className='w-1/2'><img src={img2} alt="Photos" /></figure>
                    <div className="card-body w-1/2">
                        <h2 className="card-title">Name: <br /> Shahid Al Siam</h2>
                        <p>Phone: 01755421557 <br /> Email: siam@gmail.com</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 w-full my-6 shadow-xl">
                    <figure className='w-1/2'><img src={img3} alt="Photos" /></figure>
                    <div className="card-body w-1/2">
                        <h2 className="card-title">Name: <br /> Stiven Ruku</h2>
                        <p>Phone: 01303615072 <br /> Email: stiven@gmail.com</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 w-full my-6 shadow-xl">
                    <figure className='w-1/2'><img src={img1} alt="Photos" /></figure>
                    <div className="card-body w-1/2">
                        <h2 className="card-title">Name:<br />Mosraful Habib</h2>
                        <p>Phone: 01774514821 <br /> Email: habib@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;