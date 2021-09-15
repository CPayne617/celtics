import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from 'axios';


import JaylenBrown from './../assets/JaylenBrown.png';
import JasonTatum from './../assets/JasonTatum.png';
import MarcusSmart from './../assets/MarcusSmart.png';
import RobertWilliams from './../assets/RobertWilliams.png';
import AaronNesmith from './../assets/AaronNesmith.png';
import PaytonPritchard from './../assets/PaytonPritchard.png';
import RomeoLangford from './../assets/RomeoLangford.png';
import DennisSchroder from './../assets/DennisSchroder.png';
import AlHorford from './../assets/AlHorford.png';
import EnesKanter from './../assets/EnesKanter.png';
import JoshRichardson from './../assets/JoshRichardson.png';
import GrantWilliams from './../assets/GrantWilliams.png';
import JuanchoHernangomez from './../assets/JuanchoHernangomez.png';
import JabariParker from './../assets/JabariParker.png';
import BrunoFernando from './../assets/BrunoFernando.png';
import SamHauser from './../assets/SamHauser.jpeg';
import JuhannBegarin from './../assets/JuhannBegarin.jpeg';
import LukeKornet from './../assets/LukeKornet.png';
import JuwanMorgan from './../assets/JuwanMorgan.png';


import Home from "./Home";
import Players from "./Players";
import History from './History';

import '../App.css';

function App() {

  //failed api-key
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
      position: 'SG/SF',
      image: `${JaylenBrown}`
    },
    {
      name: 'Jason Tatum',
      position: 'SF/PF',
      image: `${JasonTatum}`
    },
    {
      name: 'Marcus Smart',
      position: 'SG/PG',
      image: `${MarcusSmart}`
    },
    {
      name: 'Robert Williams',
      position: 'C/PF',
      image: `${RobertWilliams}`
    },
    {
      name: 'Aaron Nesmith',
      position: 'SG/SF',
      image: `${AaronNesmith}`
    },
    {
      name: 'Payton Pritchard',
      position: ' SG/PG',
      image: `${PaytonPritchard}`
    },
    {
      name: 'Romeo Langford',
      position: 'SG/SF',
      image: `${RomeoLangford}`
    },
    {
      name: 'Dennis Schroder',
      position: 'PG/SG',
      image: `${DennisSchroder}`
    },
    {
      name: 'Al Horford',
      position: 'C/PF',
      image: `${AlHorford}`
    },
    {
      name: 'Enes Kanter',
      position: 'C',
      image: `${EnesKanter}`
    },
    {
      name: 'Josh Richardson',
      position: 'SG',
      image: `${JoshRichardson}`
    },
    {
      name: 'Grant Williams',
      position: 'PF/SF',
      image: `${GrantWilliams}`
    },
    {
      name: 'Juancho Hernangomez',
      position: 'PF',
      image: `${JuanchoHernangomez}`
    },
    {
      name: 'Jabari Parker',
      position: 'PF/SF',
      image: `${JabariParker}`
    },
    {
      name: 'Bruno Fernando',
      position: 'PF/C',
      image: `${BrunoFernando}`
    },
    {
      name: 'Sam Hauser',
      position: 'PF/SF',
      image: `${SamHauser}`
    },   
    {
      name: 'Juhann Begarin',
      position: 'SG/PG',
      image: `${JuhannBegarin}`
    },
    {
      name: 'Luke Kornet',
      position: 'PF/C',
      image: `${LukeKornet}`
    },
    {
      name: 'Juwan Morgan',
      position: 'SF/PF',
      image: `${JuwanMorgan}`
    },
  ])
  

  // const playersList = players.map((players) => <Players players={players} />)
  useEffect(() => {
    axios.get('https://free-nba.p.rapidapi.com/players/%7Bid%7D', {
      headers: {
        'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
        'x-rapidapi-key': '0e5e888695mshcef663154da3dafp1ae7dfjsnf0fab7a9da17'}
    }).then(response => console.log(response)).catch(err => console.log(err))
   
  }, [])
  return (
    <div id="app">
      
      <NavBar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/players">
          {/* {playersList} */}
          <Players players ={players}/>
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