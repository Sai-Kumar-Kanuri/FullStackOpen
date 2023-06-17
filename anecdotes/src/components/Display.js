const Display = (props) => {

    return (
        <div>
            <p>{props.anecdotes}</p>
            <p>has {props.votesCount} votes</p>
        </div>
    )
}

export default Display;