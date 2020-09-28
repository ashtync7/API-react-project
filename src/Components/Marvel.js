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
            console.log(res.data.data.results)
            setBPEvents(res.data.data.results)
        }

        marvelMore()

        const marvelSeries = async () => {
            let ts = new Date()
            let res = await Axios.get(`http://gateway.marvel.com/v1/public/characters/1009187/series?ts=${ts}&apikey=${process.env.REACT_APP_MARVELKEY}&hash=${md5(ts + process.env.REACT_APP_PRIVKEY + process.env.REACT_APP_MARVELKEY)}`)
            console.log(res.data.data.results)
            setBPSeries(res.data.data.results)
        }

        marvelSeries()

        const marvelStories = async () => {
            let ts = new Date()
            let res = await Axios.get(`http://gateway.marvel.com/v1/public/characters/1009187/stories?ts=${ts}&apikey=${process.env.REACT_APP_MARVELKEY}&hash=${md5(ts + process.env.REACT_APP_PRIVKEY + process.env.REACT_APP_MARVELKEY)}`)
            console.log(res.data.data.results)
            setBPStories(res.data.data.results)
        }

        marvelStories()

        const showComics = () => {
            let bpData = bpData[Math.floor(Math.random() * bpData.length)]
            console.log(bpData)

            // setDisplayThing(person)
        }

        const showEvents = () => {
            let bpEvents = bpEvents[Math.floor(Math.random() * bpEvents.length)]
            console.log(bpEvents)

            setDisplayThing(bpEvents)

        }

        const showSeries = () => {
            let bpSeries = bpSeries[Math.floor(Math.random() * bpSeries.length)]
            console.log(bpSeries)

        }

        const showStories = () => {
            let bpStories = bpStories[Math.floor(Math.random() * bpStories.length)]
            console.log(bpStories)

        }

    }, [])

    // const showComics = () => {
    //     let bpData = bpData[Math.floor(Math.random() * bpData.length)]
    //     console.log(bpData)

    //     // setDisplayThing(person)
    // }

    // const showEvents = () => {
    //     let bpEvents = bpEvents[Math.floor(Math.random() * bpEvents.length)]
    //     console.log(bpEvents)

    //     setDisplayThing(bpEvents)

    // }

    // const showSeries = () => {
    //     let bpSeries = bpSeries[Math.floor(Math.random() * bpSeries.length)]
    //     console.log(bpSeries)

    // }

    // const showStories = () => {
    //     let bpStories = bpStories[Math.floor(Math.random() * bpStories.length)]
    //     console.log(bpStories)

    // }


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


            <button onClick={showComics} id="BPbuttons">COMICS</button>
            <button onClick={showEvents} id="BPbuttons">EVENTS</button>
            <button onClick={showSeries} id="BPbuttons">SERIES</button>
            <button onClick={showStories} id="BPbuttons">STORIES</button>

        </div>
    )
}

export default Marvel;

// 1009187

//     / v1 / public / characters / 1009187 / comics

// /v1/public / characters / 1009187 / events 
