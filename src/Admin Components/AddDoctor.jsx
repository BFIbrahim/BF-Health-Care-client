import React from 'react';

const hundleAddDoctor = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const imgUrl = form.imgurl.value;
    const specialized = form.espicialized.value;
    const cirtificate = form.cirtificate.value;
    const experience = form.experience.value;

    const newDoctor = { name, imgUrl, specialized, cirtificate, experience }
    console.log(newDoctor)

    fetch('http://localhost:5000/doctors', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newDoctor)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                alert("Success")
                form.reset('')
            }
        })
}
const AddDoctor = () => {
    return (
        <div className='w-[98%] mx-auto md:w-[60%] lg:w-[60%]'>
            <h1 className='text-4xl text-center mb-3 font-semibold'>Add a new Doctor</h1>
            <form className='' onSubmit={hundleAddDoctor}>
                <input className=' mb-5 w-full  border-2 p-2 rounded border-cyan-600' type="text" name="name" placeholder='Doctor Name' id="" />

                <input className=' mb-5 w-full  border-2 p-2 rounded border-cyan-600' type="text" name="imgurl" placeholder='Image Link' id="" />
                <input className=' mb-5 w-full  border-2 p-2 rounded border-cyan-600' type="text" name="espicialized" placeholder='Especialized in:' id="" />

                <input className=' mb-5 w-full  border-2 p-2 rounded border-cyan-600' type="text" name="cirtificate" placeholder='Cirtification' id="" />
                <input className=' mb-5 w-full  border-2 p-2 rounded border-cyan-600' type="text" name="experience" placeholder='Experience' id="" />

                <input type="submit" placeholder='Submit' className='bg-cyan-600 text-white w-full font-bold p-2 rounded cursor-pointer' />

            </form>
        </div>
    );
};

export default AddDoctor;