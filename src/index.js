import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const firstBook = {
    author: "John Doe",
    title: "Interesting facts for curious minds",
    img: "./images/book-1.jpg",
};

const secondBook = {
    author: "Freida McFaddenFreida McFadden",
    title: "The Housemaid's Secret",
    img: "https://m.media-amazon.com/images/I/81LZXcfKqJL._AC_UL320_.jpg",
};

const BookList = () => {
    return (<section className="booklist">
        <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />
        <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
    </section>);
};

const Book = (props) => {
    console.log(props);
    return (<article className="book">
        <img src={props.img} alt={props.title} />
        <h2>{props.title}</h2>
        <h4>{props.author.toUpperCase()}</h4>
    </article >);
};


const root = ReactDom.createRoot(document.getElementById
    ('root'));

root.render(<BookList />);