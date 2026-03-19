
function Search (props) {
    return (
        <>     
            <p>Search by author </p>
            <input type="text" onChange={props.searchAuthor}/>
            <br></br>
            <p>Hide id </p>
            <input type="checkbox" onChange={props.hideId}/>
        </>
    )
}

export default Search;