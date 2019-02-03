import React, { Component } from "react";
import { render } from "react-dom";

let bookList = [
  { title: "Hunger", author: "Roxane Gay", pages: 320 },
  { title: "Hunger", author: "Roxane Gay", pages: 320 },
  { title: "Hunger", author: "Roxane Gay", pages: 320 },
  { title: "Hunger", author: "Roxane Gay", pages: 320 }
];

const Book = ({ title, author, pages }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
    </section>
  );
};

const Library = ({ books }) => {
  return (
    <div>
      {books.map(book => (
        <Book title={book.title} author={book.author} pages={book.pages} />
      ))}
    </div>
  );
};
render(<Library books={bookList} />, document.getElementById("root"));
