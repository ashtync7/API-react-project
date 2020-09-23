import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import md5 from 'md5'


import api from 'marvel-api'

const marvel = api.createClient({
  publicKey: process.env.REACT_APP_MARVELKEY
  , privateKey: process.env.REACT_APP_PRIVKEY
});



// developer.marvel.com

function App() {
  console.log(process.env)
  const getDD = async () => {
    let res = await Axios.get('https://www.dnd5eapi.co/api/spells/acid-arrow/')
    console.log(res)
  }

  const getMarvel = async () => {
    let res = await marvel.characters.findAll()
    //let res = await marvel.events.findByName('spider-man')
    //let res = await marvel.creators.findByName('Pat', 'Lee', '(X-Men/FF)')
    console.log(res)
  }

  const marvelAgain = async () => {
    let ts = new Date()
    let res = await Axios.get(`http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${process.env.REACT_APP_MARVELKEY}&hash=${md5(ts + process.env.REACT_APP_PRIVKEY + process.env.REACT_APP_MARVELKEY)}`)
    console.log(res)
  }
  marvelAgain()



  getDD()
  getMarvel()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
