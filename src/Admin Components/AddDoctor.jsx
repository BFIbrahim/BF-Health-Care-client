import React from 'react';

const AddDoctor = () => {
    return (
        <div>
            <h1>Add a new Doctor</h1>
            <form>
                <input type="text" name="name" placeholder='Doctor Name' id="" />
                <input type="text" name="imgurl" placeholder='Image Link' id="" />
                <input type="text" name="imgurl" placeholder='Especialized in:' id="" />
                <input type="text" name="imgurl" placeholder='Cirtification' id="" />
                <input type="text" name="imgurl" placeholder='Experience' id="" />

            </form>
        </div>
    );
};

export default AddDoctor;