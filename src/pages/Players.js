function Players (props){



    
    return (
        <div id='players'>

            { props.players.map((player) => 
        
        <div>
            <b> {player.name} </b>
            {player.position}
            <div className='photo'>
            <img src={`${player.image}`} />
            </div>
        </div>
    
)}


        </div>
    )
}

export default Players