import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import Home from "./Home";
import Players from "./Players";
import History from './History';

import '../App.css'

const App = () => {

  // //failed api-key
  // const options = {
  //   method: 'GET',
  //   url: 'https://api-nba-v1.p.rapidapi.com/teams/city/boston',
  //   headers: {
  //     'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
  //     'x-rapidapi-key': '0e5e888695mshcef663154da3dafp1ae7dfjsnf0fab7a9da17'
  //   }
  // };

  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });

  const [players, setPlayers] = useState([
    {
      name: 'Jaylen Brown',
      position: 'SG/SF'
    },
    {
      name: 'Jason Tatum',
      position: 'SF/PF'
    },
    {
      name: 'Marcus Smart',
      position: 'SG/PG'
    },
    {
      name: 'Robert Williams',
      position: 'C/PF'
    },
    {
      name: 'Aaron Nesmith',
      position: 'SG/SF'
    },
    {
      name: 'Payton Pritchard',
      position: ' SG/PG'
    },
    {
      name: 'Romeo Langford',
      position: 'SG/SF'
    },
    {
      name: 'Dennis Schroder',
      position: 'PG/SG'
    },
    {
      name: 'Al Horford',
      position: 'C/PF'
    },
    {
      name: 'Enes Kanter ',
      position: 'C'
    },
    {
      name: 'Josh Richardson',
      position: 'SG'
    },
    {
      name: 'Grant Williams',
      position: 'PF/SF'
    },
    {
      name: 'Carsen Edwards',
      position: 'PG'
    },
    {
      name: 'Jabari Parker',
      position: 'PF/SF'
    },
    {
      name: 'Bruno Fernando',
      position: 'PF/C'
    },
    {
      name: 'Sam Hauser',
      position: 'PF/SF'
    },
    {
      name: 'Kris Dunn',
      position: 'SG/PG'
    },
    {
      name: 'Juhann Begarin',
      position: 'SG/PG'
    },
    {
      name: 'Luke Kornet',
      position: 'PF/C'
    },
  ])
  console.log(players)

  const playersList = players.map((players) => <Players players={players} />)

  return (
    <div id="app">
      <NavBar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/players">
          {playersList}
        </Route>
        <Route path="/history">
          <History />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}


export default App