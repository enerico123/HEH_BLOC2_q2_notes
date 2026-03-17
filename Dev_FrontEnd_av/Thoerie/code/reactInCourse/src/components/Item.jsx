const Item = (props) => {
    return (
        <li>
            <span><a href={props.item.url}>{props.item.title}</a></span>
            <span>auth : {props.item.author}</span>
            <span>nbr. com. : {props.item.num_comments}</span>
            <span>pts : {props.item.points}</span>
        </li>
    )
}

export default Item