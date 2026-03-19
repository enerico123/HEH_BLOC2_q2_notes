import Photo from './Photo.jsx'

function Gallery(props) {


    return (
        <div>
            <h1>Galerie de Photos</h1>

            {props.photos.map((photo) => {
                
                return (
                    <Photo
                    key={photo.id}
                    id={photo.id}
                    size={{ width: 200, height: 200 }}
                    author={photo.author}
                    hideId={props.hideId}
                    />
                );
                })}
            

        </div>
    );
}

export default Gallery;