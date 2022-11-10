import React from 'react';
import swal from 'sweetalert';

const AddService = () => {

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const place_id = form.place_id.value;
        const title = form.title.value;
        const img = form.image.value;
        const price = form.price.value;
        const description = form.description.value;

        const addService = {
            place_id,
            title,
            img,
            price,
            description
        }

        fetch('https://service-review-server-sable-two.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    swal('New Tour place successfully added');
                    form.reset();
                }
            })
            .catch(error => console.error(error))

    }

    return (
        <form onSubmit={handleAddService} className='border-2 rounded-xl p-5 shadow-2xl my-5'>
            <h2 className='text-4xl text-blue-600 text-center font-bold mb-4'>Add Tourist Place</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input name='place_id' type="text" placeholder="place id" className="input input-bordered w-full" required />
                <input name='title' type="text" placeholder="title" className="input input-bordered w-full" required />
                <input name='image' type="text" placeholder="image url" className="input input-bordered w-full" required />
                <input name='price' type="text" placeholder="tour cost" className="input input-bordered w-full" required />
            </div>
            <textarea name='description' className="textarea textarea-bordered my-4 w-full h-40" placeholder="description" required></textarea>
            <div className='flex justify-center mb-3'>
                <button className="btn btn-wide bg-blue-600 text-xl">Add Place</button>
            </div>
        </form>
    );
};

export default AddService;