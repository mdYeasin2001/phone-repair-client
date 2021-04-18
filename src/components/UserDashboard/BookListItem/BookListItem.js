import React from 'react';
import './BookListItem.css';

const BookListItem = ({ book }) => {
    const { title, description, img } = book?.service[0]
    return (
        <div className="col">
            <div className="card h-100">
                <h5 className="card-header bg-white border-0 d-flex justify-content-between">
                    <img className="img-fluid w-25" src={img} alt="service"/>
                    <p className={ ` ${book.status === "Pending" ? "pending status" : ""} ${book.status === "On going" ? "ongoing status" : ""} ${book.status === "Done" ? "done status" : ""}`}>{book.status}</p>
                </h5>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BookListItem;