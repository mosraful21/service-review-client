import React from 'react';
import place from '../../../assets/images/about_us/sajek.jpg'

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2'>
                    <img src={place} alt="" className="w-full h-full rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2'>
                    <h1 className="text-3xl font-bold my-5">Naturel place in Bangladesh</h1>
                    <p className="text-justify">Bangladesh is a beautiful country with it's natural attractive beauties. It is the country where the both sea and hills are present. There are thousands of attractive beautiful place in Bangladesh. But, we listed top ten famous beautiful place for visit. We think it will help you when you visit these best places during your vacation. <br /> <br /> Khagrachari tourist place: <br />It is the most eastern district in Bangladesh. There are various beautiful place those can take the mind of the tourist or natural fans. Arya Banbihar Pagoda, Manikchori, Alutila, Dighinala, Ramgarh etc are the the best tourist place in Khagrachori.</p>
                </div>
            </div>
        </div>
    );
};

export default About;