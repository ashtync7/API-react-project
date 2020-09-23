import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import md5 from 'md5'
import { Switch, Route } from 'react-router-dom'
import api from 'marvel-api'
import StarWars from './Components/StarWars'
import SaintSeiya from './Components/SaintSeiya'
import HarryPotter from './Components/HarryPotter'
import DD5e from './Components/DD5e'
import Marvel from './Components/Marvel'
import Home from './Components/Home'
import DDproperty from './Components/DDproperty'

const marvel = api.createClient({
  publicKey: process.env.REACT_APP_MARVELKEY
  , privateKey: process.env.REACT_APP_PRIVKEY
});



// developer.marvel.com

function App() {
  // console.log(process.env)
  // const getDD = async () => {
  //   let DDres = await Axios.get('https://www.dnd5eapi.co/api/')
  //   console.log(DDres)
  // }

  const getSWAPI = async () => {
    let SWres = await Axios.get('https://swapi.dev/api/')
    console.log(SWres)
  }

  let [hpChar, setHpChar] = useState([]);
  useEffect(() => {

    const getPotter = async () => {
      let HPres = await Axios.get("https://www.potterapi.com/v1/characters?key=$2a$10$AkgCGEKIUDVqXQ.rjYiMgu3kTgjm4QVSxU9zz188JXV7VPWSZaiOW")
      console.log(HPres.data)
      setHpChar(HPres.data)
    }
    getPotter()
  }, [])

  const getSeiya = async () => {
    let SeiyaRes = await Axios.get('https://saint-seiya-api.herokuapp.com/api/characters')
    console.log(SeiyaRes)
  }


  const getMarvel = async () => {
    let Mres = await marvel.characters.findAll()
    //let res = await marvel.events.findByName('spider-man')
    //let res = await marvel.creators.findByName('Pat', 'Lee', '(X-Men/FF)')
    console.log(Mres)
  }

  const marvelAgain = async () => {
    let ts = new Date()
    let res = await Axios.get(`http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${process.env.REACT_APP_MARVELKEY}&hash=${md5(ts + process.env.REACT_APP_PRIVKEY + process.env.REACT_APP_MARVELKEY)}`)
    console.log(res)
  }
  marvelAgain()
  getSeiya()
  getSWAPI()

  getMarvel()
  return (
    <div >
      <h1>Welcome to Geekworld</h1>
      <Switch>
        <Route path="/Home" render={(props) => <Home />}></Route>
        <Route path="/StarWars" render={(props) => <StarWars />}></Route>
        <Route path="/SaintSeiya" render={(props) => <SaintSeiya />}></Route>
        <Route path="/HarryPotter" render={(props) => <HarryPotter hpChar={hpChar} {...props} />}></Route>
        <Route exact path="/DD5e" render={(props) => <DD5e />}></Route>
        <Route exact path="/DD5e/:property" render={(props) => <DDproperty {...props} />}></Route>
        <Route path="/Marvel" render={(props) => <Marvel />}></Route>
      </Switch>
    </div>
  );
}


export default App;
