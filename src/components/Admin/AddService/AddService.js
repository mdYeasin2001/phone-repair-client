import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const [imageURL, setImageURL] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const serviceData = {title: data.title, description: data.description, img: imageURL}
        console.log(serviceData);
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row row-cols-1 row-cols-md-2 bg-light p-4 gx-4 rounded shadow">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Service Title</label>
                            <input type="text" name="title" className="form-control" id="title" placeholder="Enter title" {...register("title", { required: true })} />
                            {errors.title && <span className="text-danger">Enter Service Title Here</span>}
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="file" className="form-label">Image</label>
                            <input type="file" name="file" onChange={handleImageUpload} className="form-control" id="file" required/>
                        </div>
                    </div>
                    <div className="col">
                    <label htmlFor="description" className="form-label">Description</label>
                        <textarea name="description" className="form-control" placeholder="Add a description..." id="description" cols="30" rows="7" {...register("description", { required: true })}></textarea>
                        {errors.description && <span className="text-danger">Write a description</span>}
                    </div>
                </div>
                <input className="btn btn-success ms-auto d-block mt-3" value="ADD SERVICE" type="submit" />
            </form>
        </div>
    );
};

export default AddService;