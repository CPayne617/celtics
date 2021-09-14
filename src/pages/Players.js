const Players = (props) => {
    // console.log(props)
    
    return(
        <div id='players'>
            <p>
                <b> {props.players.name} </b> {props.players.position} {/*<b>means to make text bold</b> */}
            </p>
            
           
        </div>
    )
}

export default Players