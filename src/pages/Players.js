function Players (props){



    
    return (
        <div id='players'>

            { props.players.map((player) => 
        
        <div>
            <b> {player.name} </b>
            {player.position}
            <img src={`${player.image}`} />
        </div>
    
)}


        </div>
    )
}

export default Players