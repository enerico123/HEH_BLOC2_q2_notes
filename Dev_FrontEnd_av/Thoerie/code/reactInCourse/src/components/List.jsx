const books = [
    {
        title: "The Great Gatsby",
        url: "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg",
        author: "F. Scott Fitzgerald",
        num_comments: 5,
        points: 10,
        objectID: 0,
    },
    {
        title: "To Kill a Mockingbird",
        url: "https://images-na.ssl-images-amazon.com/images/I/81OtwF1XcDL.jpg",
        author: "Harper Lee",
        num_comments: 10,
        points: 8,
        objectID: 1,
    }
]

const List = () => {

    return(
        <ul>
            {books.map((book) => (
                <li key={book.objectID}>
                    <span><a href={book.url}>{book.title}</a></span>
                    <span>{book.author}</span>
                    <span>{book.num_comments}</span>
                    <span>{book.points}</span>
                </li>
            ))}
        </ul>
    )

}

export default List 