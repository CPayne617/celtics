// import "./styles.css";
// import {useEffect, useState} from 'react'

// export default function App() {
//   const [players, setPlayers] = useState([
//     'teo',
//     'carlisle',
//     'titus',
//     'zamira',
//     'tory'
//   ])
//   const [renderPlayers, setRenderPlayers] = useState(players)
//   const [userInput, setUserInput] = useState('')

//   const handleChange = (e) => {
//     console.log('we are typing', e.target.value)
//     setUserInput(e.target.value)
//     let player = players.filter((player) => {
//       return player.includes(e.target.value)
//     })
//     if(player) {
//       setRenderPlayers(player)
//     } else {
//       setRenderPlayers(players)
//     }
//   }

//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <form>
//         <input value={userInput} onChange={handleChange} />
//         <button type="submit">Submit</button>
//       </form>

//       {renderPlayers.map((player) => 
//         <h1>{player}</h1>
//       )}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar"
// import "../SearchBar.css";

const [playerList, setPlayerList] = useState([
    player.name
])
  const [renderPlayerList, setRenderPlayerList] = useState(playerList)
  const [userInput, setUserInput] = useState('')

  const handleChange = (e) => {
    console.log('we are typing', e.target.value)
    setUserInput(e.target.value)
    let player = playerList.filter((player) => {
      return player.includes(e.target.value)
    })
    if(player) {
      setRenderPlayerList(player)
    } else {
      setRenderPlayerList(playerList)
    }
  };

  return (
    <div className="League">
      <h1>League Players</h1>
      <form>
        <input value={userInput} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

      {renderPlayerList.map((player) => 
        <h1>{player}</h1>
      )}
    </div>
  );




const League = () => {
    return(
        <div id="league">
        <div className="search">
            <SearchBar placeholder="Enter a Player Name..." />
        </div>
        </div>
    )
}

export default League;