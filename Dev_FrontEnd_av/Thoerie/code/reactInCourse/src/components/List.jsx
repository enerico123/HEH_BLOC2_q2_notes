import { useState } from "react";

const book = 
    {
        title: "MONLIVREHAHA",
        url: "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg",
        author: "F. Scott Fitzgerald",
        num_comments: 5,
        points: 10,
        objectID: 0,
    }




const List = (props) => {
    const [addbook,setaddbook] = useState(props.list)
    const add = () => {
        setaddbook((prev) => [...prev, book]);
    }

    return(
        <>
        <ul>
            {addbook.map((book) => (
                <li key={book.objectID}>
                    <span><a href={book.url}>{book.title}</a></span>
                    <span>{book.author}</span>
                    <span>{book.num_comments}</span>
                    <span>{book.points}</span>
                </li>
            ))}
        </ul>
        <button onClick={add}>Add</button>
        </>
    )

}

export default List 