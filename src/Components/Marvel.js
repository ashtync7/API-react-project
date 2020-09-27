import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import md5 from 'md5';

function Marvel() {
    let [bpData, setBPData] = useState([])
    let [bpEvents, setBPEvents] = useState([])
    let [bpSeries, setBPSeries] = useState([])
    let [bpStories, setBPStories] = useState([])

    let [displayThing, setDisplayThing] = useState({ name: '' })

    useEffect(() => {


        const marvelAgain = async () => {
            let ts = new Date()
            let res = await Axios.get(`http://gateway.marvel.com/v1/public/characters/1009187/comics?ts=${ts}&apikey=${process.env.REACT_APP_MARVELKEY}&hash=${md5(ts + process.env.REACT_APP_PRIVKEY + process.env.REACT_APP_MARVELKEY)}`)
            console.log(res.data.data.results)
            setBPData(res.data.data.results)
        }

        marvelAgain()

        const marvelMore = async () => {
            let ts = new Date()
            let res = await Axios.get(`http://gateway.marvel.com/v1/public/characters/1009187/events?ts=${ts}&apikey=${process.env.REACT_APP_MARVELKEY}&hash=${md5(ts + process.env.REACT_APP_PRIVKEY + process.env.REACT_APP_MARVELKEY)}`)
            console.log(res)
            setBPEvents(res)
        }

        marvelMore()

        const marvelSeries = async () => {
            let ts = new Date()
            let res = await Axios.get(`http://gateway.marvel.com/v1/public/characters/1009187/series?ts=${ts}&apikey=${process.env.REACT_APP_MARVELKEY}&hash=${md5(ts + process.env.REACT_APP_PRIVKEY + process.env.REACT_APP_MARVELKEY)}`)
            console.log(res)
            setBPSeries(res)
        }

        marvelSeries()

        const marvelStories = async () => {
            let ts = new Date()
            let res = await Axios.get(`http://gateway.marvel.com/v1/public/characters/1009187/stories?ts=${ts}&apikey=${process.env.REACT_APP_MARVELKEY}&hash=${md5(ts + process.env.REACT_APP_PRIVKEY + process.env.REACT_APP_MARVELKEY)}`)
            console.log(res)
            setBPStories(res)
        }

        marvelStories()

    }, [])

    const showEvents = () => {
        let bpEvents = bpEvents[Math.floor(Math.random() * bpEvents.length)]
        console.log(bpEvents)

        setDisplayThing(bpEvents)

    }


    // let [blackPanther, setBlackPanther] = useState([]);
    // const getBP = async () => {
    //     let BPres = await Axios.get("link")
    //     console.log(BPres.data)
    //     setBlackPanther(BPres.data)
    // }
    // useEffect(() => {
    //     getBP()
    // })

    return (

        <div id="panther">

            <header>
                <img src="./BP.jpg" className="BPheader" />
            </header>

            <p id="BPtext">Dedicated to Chadwick Boseman // "Wakanda Forever" :'( </p>


            <button id="BPbuttons">COMICS</button>
            <button id="BPbuttons">EVENTS</button>
            <button id="BPbuttons">SERIES</button>
            <button id="BPbuttons">STORIES</button>

        </div>
    )
}

export default Marvel;

// 1009187

//     / v1 / public / characters / 1009187 / comics

// /v1/public / characters / 1009187 / events 
