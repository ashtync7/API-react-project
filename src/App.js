import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import md5 from 'md5';
import { Switch, Route } from 'react-router-dom';
import api from 'marvel-api';
import StarWars from './Components/StarWars';
import Star2 from './Components/Star2';
import SaintSeiya from './Components/SaintSeiya';
import HarryPotter from './Components/HarryPotter';
import DD5e from './Components/DD5e';
import Marvel from './Components/Marvel';
import Home from './Components/Home';
import DDproperty from './Components/DDproperty';
import DDchild from './Components/DDchild';
import StarWars2 from './Components/Star2';


const marvel = api.createClient({
  publicKey: process.env.REACT_APP_MARVELKEY
  , privateKey: process.env.REACT_APP_PRIVKEY
});



// developer.marvel.com

function App() {



  // const getSWAPI = async () => {
  //   let SWres = await Axios.get('https://swapi.dev/api/')
  //   console.log(SWres)
  // }



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
  console.log(marvel)

  const marvelCheck = async () => {
    let marvelSomething = await marvel.characters.findByName()
    console.log(marvelSomething)
  }

  marvelCheck()

  const marvelAgain = async () => {
    let ts = new Date()
    let res = await Axios.get(`http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${process.env.REACT_APP_MARVELKEY}&hash=${md5(ts + process.env.REACT_APP_PRIVKEY + process.env.REACT_APP_MARVELKEY)}`)
    console.log(res)
  }
  marvelAgain()
  getSeiya()
  // getSWAPI()

  getMarvel()
  return (
    <div >
      <h1>Geek-o-pedia</h1>
      <Switch>
        <Route path="/Home" render={(props) => <Home />}></Route>
        <Route path="/StarWars" render={(props) => <StarWars />}></Route>
        <Route path="/StarWars/:subpage" render={(props) => <Star2 />}></Route>
        <Route path="/SaintSeiya" render={(props) => <SaintSeiya />}></Route>
        <Route path="/HarryPotter" render={(props) => <HarryPotter />}></Route>
        <Route exact path="/DD5e" render={(props) => <DD5e />}></Route>
        <Route exact path="/DD5e/:property" render={(props) => <DDproperty {...props} />}></Route>
        <Route exact path="/DD5e/:property/:child" render={(props) => <DDchild {...props} />}></Route>
        <Route path="/Marvel" render={(props) => <Marvel />}></Route>
      </Switch>
    </div>
  );

}

export default App;
