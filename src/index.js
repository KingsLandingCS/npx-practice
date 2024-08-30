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
    return (
        <section className='booklist'>
            <EventExamples />
            {books.map((book) => {
                return <Book {...book} key={book.id}></Book>
            })}
        </section>
    );
}

const EventExamples = () => {
    const handleFormInput = (e) => {
        console.log("Event:", e);
        console.log("Target:", e.target);
        console.log("Name:", e.target.name);
        console.log("Value:", e.target.value);
    };

    const handleButtonClick = () => {
        alert("handle form input");
    };

    const handleFormSubmission = (e) => {
        e.preventDefautl();
        console.log("form submitted");
    };
    return (<section>
        <form onSubmit={handleFormSubmission}>
            <h2>Typical Form</h2>
            <input type="text" name="example" onChange={handleFormInput} style={{ margin: "1rem 0" }} />
        </form>
        <button type="submit">submit</button>
        <button onClick={handleButtonClick} type="button">click me</button>
    </section>);
}

const Book = ({ img, title, author }) => {
    return (
        <article className="book">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author.toUpperCase()}</h4>
        </article>
    );
};


const root = ReactDom.createRoot(document.getElementById
    ('root'));

root.render(<BookList />);