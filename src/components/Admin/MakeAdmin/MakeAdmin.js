import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/makeAdmin', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => result && alert("Admin added successfully!"));
    };
    return (
        <div className="container py-5">
            <h1 className="text-martinique pb-3 text-center">Make Admin</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 offset-md-3">

                        <div className="input-group mb-3">
                            <input type="email" name="email" className="form-control form-control-lg" id="email" placeholder="Enter email" {...register("email", { required: true })} />
                            <button className="btn btn-lg btn-success bg-martinique" type="submit" id="button-addon2">submit</button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default MakeAdmin;