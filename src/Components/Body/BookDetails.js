import React from "react";

const BookDetails = (props) => {
  return (
    <div className="book-details">
      <div className="books-image mx-2">
        <img src={props.books.imageLink} />
      </div>
      <div className="book-content">
        <h4>{props.books.title}</h4>
        <strong>Author: {props.books.author}</strong>
        <br />
        <strong>Published On: {props.books.year}</strong>
        <p>{props.books.decription}</p>
      </div>
    </div>
  );
};
export default BookDetails;