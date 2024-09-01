import React, { Children } from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const books = [{
    author: "John Doe",
    title: "Interesting facts for curious minds",
    img: "./images/book-1.jpg",
    id: 1,
},

{
    author: "Freida McFaddenFreida McFadden",
    title: "The Housemaid's Secret",
    img: "https://m.media-amazon.com/images/I/81LZXcfKqJL._AC_UL320_.jpg",
    id: 2,
},];


function BookList() {
    const someValue = 'shakeAndBake';
    const displayValue = () => {
        console.log(someValue);
    }
    return (
        <section className='booklist'>
            <EventExamples />
            {books.map((book) => {
                return <Book {...book} key={book.id}></Book>
            })}
            <SomeComponent someValue={somevalue} />
        </section>
    );
}



const Book = ({ props }) => {
    const { img, title, author } = props;
    return (
        <article className="book">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <button onClick={ }>Click me</button>
            <h4>{author.toUpperCase()}</h4>
        </article>
    );
};


const root = ReactDom.createRoot(document.getElementById
    ('root'));

root.render(<BookList />);