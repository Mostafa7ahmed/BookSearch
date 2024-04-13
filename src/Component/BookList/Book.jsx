import React from 'react';
import { Link } from 'react-router-dom';
import "./book.css";
import TextName from "../../TextName"

const Book = (book) => {
    return (
        <div className='book-item flex flex-column flex-sb'>
            <div className='book-item-img'>
                <img src={book.cover_img} alt="cover" loading="lazy" />
            </div>
            <div className='book-item-info text-center'>
                <Link to={`/book/${book.id}`} {...book}>
                    <div className='book-item-info-item title fw-7 fs-18'>
                        <TextName className='text' text={book.title} maxLength={20} />
                    </div>
                </Link>

                <div className='book-item-info-item author fs-15'>
                    <span className='text-capitalize fw-7'>Author: </span>
                    <TextName className='text' text={book.author} maxLength={20} />
                </div>

                <div className='book-item-info-item edition-count fs-15'>
                    <span className='text-capitalize fw-7'>Total Editions: </span>
                    <TextName className='text' text={book.edition_count} maxLength={20} />
                </div>

                <div className='book-item-info-item publish-year fs-15'>
                    <span className='text-capitalize fw-7'>First Publish Year: </span>
                    <TextName className='text' text={book.first_publish_year} maxLength={20} />
                </div>
            </div>
        </div>
    )
}

export default Book