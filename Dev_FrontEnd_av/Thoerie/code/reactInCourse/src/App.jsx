import './App.css'
import Search from './components/Search';
import List from './components/List';




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
    }
]

  return (
    <>
    <div>
      <h1>{welcome.greeting} {welcome.title}</h1>
      <Search/>
    </div>
    <hr />
    <List list={books}/>
    </>
  )
}


export default App
