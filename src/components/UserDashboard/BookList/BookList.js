import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookListItem from '../BookListItem/BookListItem';

const BookList = () => {
    const [loggedInUser] = useContext(UserContext);
    const [bookList, setBookList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/bookList/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                setBookList(data);
                setLoading(false);
            });
    }, [loggedInUser.email]);
    return (
        <div className="container py-5">
            {bookList.length === 0 && <h3 className="text-center">You have No Bookings Yet!!!</h3>}
            {loading &&
                <div className="d-flex justify-content-center pt-5">
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {bookList.map((book, i) => <BookListItem key={i} book={book} />)}
            </div>
        </div>
    );
};

export default BookList;