const Winner = ({ anecdotes, allVotes }) => {

    const highestVoteCount = Math.max(...allVotes)
    const highVoteIndex = allVotes.indexOf(highestVoteCount);

    const winner = anecdotes[highVoteIndex];

    if (highestVoteCount === 0) {
        return (
            <p>No Votes yet</p>
        )
    }

    return (
        <div>
            <p>{winner}</p>
            <p>has {highVoteIndex} votes</p>
        </div>
    )
}

export default Winner;