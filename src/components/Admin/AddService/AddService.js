import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const [imageURL, setImageURL] = useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const serviceData = { title: data.title, img: imageURL, serviceCharge: data.charge, description: data.description }
        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(serviceData)
        })
        .then(res => res.json())
        .then(result => {
            if(result) {
                setImageURL(null);
                alert("One service added to service list successfully!")
            }
        });
    };


    // image upload on third party image hosting site
    const handleImageUpload = (e) => {
        const imageData = new FormData();
        imageData.set('key', 'c2772d06761e65ea8652500494ef14a7');
        imageData.append('image', e.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="container py-5">
            <h1 className="text-mountain pb-3 text-center">Add Services</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row row-cols-1 row-cols-md-2 bg-light p-4 gx-4 rounded shadow">

                    <div className="col col-md-12 mb-3">
                        <label htmlFor="title" className="form-label fw-bold">Service Title</label>
                        <input type="text" name="title" className="form-control" id="title" placeholder="Enter title" {...register("title", { required: true })} />
                        {errors.title && <span className="text-danger">Enter Service Title Here</span>}
                    </div>

                    <div className="col mb-3">
                        <label htmlFor="file" className="form-label fw-bold">Image</label>
                        <input type="file" name="file" onChange={handleImageUpload} className="form-control" id="file" required />
                    </div>

                    <div className="col mb-3">
                        <label htmlFor="charge" className="form-label fw-bold">Book Price</label>
                        <input type="text" name="charge" className="form-control" id="charge" placeholder="Service Charge" {...register("charge", { required: true })} />
                        {errors.charge && <span className="text-danger">Enter service charge</span>}
                    </div>

                    <div className="col col-md-12 mb-3">
                        <label htmlFor="description" className="form-label fw-bold">Description</label>
                        <textarea name="description" className="form-control" placeholder="Add a description..." id="description" cols="30" rows="7" {...register("description", { required: true })}></textarea>
                        {errors.description && <span className="text-danger">Write a description</span>}
                    </div>

                </div>
                <input className={`btn btn-success ms-auto d-block mt-3 ${imageURL ? '' : 'disabled'}`} value="ADD SERVICE" type="submit" />
            </form>
        </div>
    );
};

export default AddService;