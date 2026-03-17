import { useState } from "react";
import Item from './Item'


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
    const [extraBooks, setExtraBooks] = useState([])

    const add = () => {
        setExtraBooks((prev) => [...prev, book]);
    }
    const allBooks = [...props.list, ...extraBooks]

    return(
        <>
        <ul>
            {allBooks.map((item) => (
                return <Item key={item.objectID} item={item}/> // problème ici 
            ))}
        </ul>
        <button onClick={add}>Add</button>
        </>
    )

}

export default List 