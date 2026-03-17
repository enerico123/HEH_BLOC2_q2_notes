import './App.css'
import Search from './components/Search';
import List from './components/List';
import { useState } from 'react';




function App() {
  const welcome = {
    greeting : "Salut",
    title : "React"
  };

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
    },
    {
        title: "1984",
        url: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg",
        author: "George Orwell",
        num_comments: 20,
        points: 15,
        objectID: 2,
    },
    {
        title: "Brave New World",
        url: "https://images-na.ssl-images-amazon.com/images/I/81zE42gT3xL.jpg",
        author: "Aldous Huxley",
        num_comments: 8,
        points: 12,
        objectID: 3,
    },
    {
        title: "The Catcher in the Rye",
        url: "https://images-na.ssl-images-amazon.com/images/I/8125BDk3l9L.jpg",
        author: "J.D. Salinger",
        num_comments: 6,
        points: 7,
        objectID: 4,
    },
    {
        title: "The Hobbit",
        url: "https://images-na.ssl-images-amazon.com/images/I/91b0C6RHiKL.jpg",
        author: "J.R.R. Tolkien",
        num_comments: 25,
        points: 20,
        objectID: 5,
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        url: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
        author: "J.K. Rowling",
        num_comments: 50,
        points: 30,
        objectID: 6,
    },
    {
        title: "The Alchemist",
        url: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
        author: "Paulo Coelho",
        num_comments: 15,
        points: 11,
        objectID: 7,
    },
    {
        title: "Crime and Punishment",
        url: "https://images-na.ssl-images-amazon.com/images/I/71FLhu4yR-L.jpg",
        author: "Fyodor Dostoevsky",
        num_comments: 12,
        points: 14,
        objectID: 8,
    },
    {
        title: "The Lord of the Rings",
        url: "https://images-na.ssl-images-amazon.com/images/I/71jLBXtWJWL.jpg",
        author: "J.R.R. Tolkien",
        num_comments: 40,
        points: 35,
        objectID: 9,
    },

]

  const [bookFilter, setBookFilter] = useState(books)

  const handleSearch = (event) => {
    let searchTerm = event.target.value
    searchTerm = searchTerm.toLowerCase()
    let returnedBook = books.filter((book) => {
      return book.title.toLocaleLowerCase().includes(searchTerm)
    })
    setBookFilter(returnedBook)
  }

  return (
    <>
    <div>
      <h1>{welcome.greeting} {welcome.title}</h1>
      <Search callBack={handleSearch}/>
    </div>
    <hr />
    <List list={bookFilter}/>
    </>
  )
}


export default App
