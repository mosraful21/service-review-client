import React from 'react';
import card from '../../assets/images/payment_card/card.png'

const Payment = () => {
    return (
        <div className='grid justify-center border-2 rounded-md p-8 m-2 my-10'>
            <img src={card} alt="Payment_Card" />
            <p className='text-3xl text-center font-bold text-blue-700'>Payment system will be update very soon</p>
        </div>
    );
};

export default Payment;