import React, { Children } from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const books = [{
    author: "John Doe",
    title: "Interesting facts for curious minds",
    img: "./images/book-1.jpg",
},

{
    author: "Freida McFaddenFreida McFadden",
    title: "The Housemaid's Secret",
    img: "https://m.media-amazon.com/images/I/81LZXcfKqJL._AC_UL320_.jpg",
},];

const names = ["john", "peter", "susan"];
const newNames = names.map((name) => {
    return <h1>{name}</h1>;
});

console.log(newNames);

function BookList() {
    return (
        <section className='booklist'>
            {newNames}
        </section>
    );
}

const Book = ({ props }) => {
    const { img, title, author } = props
    console.log(props);
    return (<article className="book">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author.toUpperCase()}</h4>

    </article >);
};


const root = ReactDom.createRoot(document.getElementById
    ('root'));

root.render(<BookList />);