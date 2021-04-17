import React from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className="container py-5">
            <h1 className="text-mountain pb-3 text-center">Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row  bg-light p-4 rounded shadow">
                    <div className="col-md-8 offset-md-2">
                        <div className="col mb-3">
                            <input type="text" name="name" className="form-control" placeholder="Your name" {...register("name", { required: true })} />
                            {errors.name && <span className="text-danger">Enter your name here</span>}
                        </div>


                        <div className="col mb-3">
                            <input type="text" name="company" className="form-control" placeholder="Company's name, Designation" {...register("company", { required: true })} />
                            {errors.company && <span className="text-danger">Enter Company's name, Designation</span>}
                        </div>

                        <div className="col mb-3">
                            <textarea name="description" className="form-control" placeholder="Add a description..." cols="30" rows="7" {...register("description", { required: true })}></textarea>
                            {errors.description && <span className="text-danger">Write a description</span>}
                        </div>
                    </div>
                </div>
                <input className="btn btn-success ms-auto d-block mt-3" value="Post" type="submit" />
            </form>
        </div>
    );
};

export default Review;