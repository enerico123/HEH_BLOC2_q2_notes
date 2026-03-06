import './App.css'
import Search from './components/Search';
import List from './components/List';

function App() {
  const welcome = {
    greeting : "Salut",
    title : "React"
  };

  return (
    <>
    <div>
      <h1>{welcome.greeting} {welcome.title}</h1>
      <Search/>
    </div>
    <hr />
    <List/>
    </>
  )
}


export default App
