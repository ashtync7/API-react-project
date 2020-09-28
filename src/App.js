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
import { Link } from 'react-router-dom'



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



  // const getSeiya = async () => {
  //   let SeiyaRes = await Axios.get('https://saint-seiya-api.herokuapp.com/api/characters')
  //   console.log(SeiyaRes)
  // }


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
    let res = await Axios.get(`https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${process.env.REACT_APP_MARVELKEY}&hash=${md5(ts + process.env.REACT_APP_PRIVKEY + process.env.REACT_APP_MARVELKEY)}`)
    console.log(res)
  }
  marvelAgain()

  const marvelMore = async () => {
    let ts = new Date()
    let res = await Axios.get('https://gateway.marvel.com/v1/public/events?ts=${ts}&apikey=${process.env.REACT_APP_MARVELKEY}&hash=${md5(ts + process.env.REACT_APP_PRIVKEY + process.env.REACT_APP_MARVELKEY)}')
    console.log(res)
  }
  marvelMore()
  // getSeiya()
  // getSWAPI()

  getMarvel()
  return (
    <body>
      <div >
        <h1 id="appname">Nerdville</h1>
        <Link to="/">
          <img src="./HomeButton.png" alt="home-image" id="HomeButton"></img>
        </Link>
        <Switch>
          <Route exact path="/" render={(props) => <Home />}></Route>
          <Route path="/StarWars" render={(props) => <StarWars />}></Route>
          <Route path="/StarWars/:subpage" render={(props) => <Star2 />}></Route>
          <Route path="/SaintSeiya" render={(props) => <SaintSeiya {...props} />}></Route>
          <Route path="/HarryPotter" render={(props) => <HarryPotter />}></Route>
          <Route exact path="/DD5e" render={(props) => <DD5e />}></Route>
          <Route exact path="/DD5e/:property" render={(props) => <DDproperty {...props} />}></Route>
          <Route exact path="/DD5e/:property/:child" render={(props) => <DDchild {...props} />}></Route>
          <Route path="/Marvel" render={(props) => <Marvel />}></Route>
        </Switch>
      </div>
    </body>
  );

}

export default App;
