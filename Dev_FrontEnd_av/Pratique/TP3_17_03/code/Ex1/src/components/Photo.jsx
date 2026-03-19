
function Photo({ id, size, author, hideId }) {

    return (
        <>  
            <h4>{author} {!hideId && `(#${id})`}</h4>
            <img src={`https://picsum.photos/id/${id}/${size.width}/${size.height}`} alt="photo" />
        </>
    )

}
export default Photo;