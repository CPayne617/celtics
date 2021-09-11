import axios from 'axios'
import { Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import Home from "./Home";
import Players from "./Players";

import '../App.css'

const App = () => {

  

  // const options = {
  //   method: 'GET',
  //   url: 'https://api-nba-v1.p.rapidapi.com/teams/city/Boston',
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

 
  return (
    <div id="app">
      <NavBar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/players">
          <Players />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App