const Preview = ({ review, rating }) => {
    // console.log(props);

    if (review === 'positive') {
        return (
            <tr><td>{review} {rating} %</td></tr>
        )
    }


    return (
        <tr><td>{review} {rating} </td></tr>

    )
}

export default Preview;