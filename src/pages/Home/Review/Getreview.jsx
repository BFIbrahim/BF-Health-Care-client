import React from 'react';

const Getreview = () => {

    

    const hundlereview = event => {
        event.preventDefault();
        const form = event.target;
        console.log(form)
        const name = form.name.value;
        const message = form.message.value;

        const review = {name, message}
        console.log(review)


        fetch('http://localhost:5000/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert("Success")
                form.reset('')
            }
        })
    }

    return (
        <div className='mt-5'>
            <div className='w-full md:w-[40%] lg:w-[40%] mx-auto text-center'>
                <h1 className='mb-3 text-4xl font-semibold'>Do You like our service?</h1>
                <form onSubmit={hundlereview}>
                    <input type="name" name='name' placeholder='Your Name' className='border-cyan-600 border-2 rounded w-full p-2 mb-3' />
                    <textarea type="text" placeholder='Write your opinion about us' name="message" className='border-cyan-600 border-2 rounded w-full h-24 p-2' />

                    <input type='submit' className='btn bg-cyan-600 font-bold text-white hover:text-gray-800 w-full mb-8'/>
                </form>


            </div>
        </div>
    );
};

export default Getreview;