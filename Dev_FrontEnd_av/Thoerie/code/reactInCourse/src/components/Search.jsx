
import { useState } from "react";

const Search = () => {
  const [searchTerm,setSearchTerm] = useState('')
  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }



  return(
    <div>
    <label htmlFor='search'>Search: </label>
    <input onChange={handleChange} id="search "type="text" />

    <p>Recherche de <strong>{searchTerm}</strong></p>
    </div>
  );
}

export default Search 

