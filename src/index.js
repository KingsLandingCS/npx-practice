import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const author = "John Doe";
const title = 'Interesting facts for curious minds';
const img = './images/book-1.jpg';

const BookList = () => {
    return (<section className="booklist">
        <Book author={author} title={title} img={img} />
        <Book author={author} title={title} img={img} />
    </section>)
};

const Book = (props) => {
    console.log(props);
    return (<article className="book">
        return <img src={props.img} alt={props.title} />
        return <h2>{props.title}</h2>
        <h4>{props.author.toUpperCase()}</h4>
    </article >);
};


const root = ReactDom.createRoot(document.getElementById
    ('root'));

root.render(<BookList />);