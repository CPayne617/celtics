const Players = (props) => {
    // console.log(props)
    
    return(
        <div>
            <h1>
                {props.players.name}
            </h1>
            <h2>
                {props.players.postion}
            </h2>
        </div>
    )
}

export default Players