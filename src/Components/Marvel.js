import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import md5 from 'md5';
import ReactAudioPlayer from 'react-audio-player'

function Marvel() {
    let [bpData, setBPData] = useState([])
    let [bpEvents, setBPEvents] = useState([])
    let [bpSeries, setBPSeries] = useState([])
    let [bpStories, setBPStories] = useState([])

    let [displayThing, setDisplayThing] = useState({ name: '' })
    let [display, setDisplay] = useState('')
    console.log(displayThing)
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


    }, [])
    const showComics = () => {
        let randomComics = bpData[Math.floor(Math.random() * bpData.length)]
        console.log(randomComics)
        console.log(randomComics.images[0].path)
        setDisplayThing(randomComics)
        setDisplay('comics')
    }

    const showEvents = () => {
        let randomEvents = bpEvents[Math.floor(Math.random() * bpEvents.length)]
        console.log(randomEvents)
        console.log(randomEvents.title)
        setDisplayThing(randomEvents)
        setDisplay('events')

    }

    const showSeries = () => {
        let randomSeries = bpSeries[Math.floor(Math.random() * bpSeries.length)]
        console.log(randomSeries)
        setDisplayThing(randomSeries)
        setDisplay('series')

    }

    const showStories = () => {
        let randomStories = bpStories[Math.floor(Math.random() * bpStories.length)]
        console.log(randomStories)
        setDisplayThing(randomStories)
        setDisplay('stories')

    }

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

            <div className="divBtn">
                <button onClick={showComics} id="BPbuttons">COMICS</button>
                <button onClick={showEvents} id="BPbuttons">EVENTS</button>
                <button onClick={showSeries} id="BPbuttons">SERIES</button>
                <button onClick={showStories} id="BPbuttons">STORIES</button>
            </div>

            <div id="jadarox">
                {display == 'comics' ?
                    <div>
                        <h2>Comic Title: {displayThing.title}</h2>
                        <img src={displayThing.images[0].path + '.' + displayThing.images[0].extension} />

                        <p>Comic Id: {displayThing.id} </p>
                        <p>Issue Number: {displayThing.issueNumber} </p>
                        <p>Number of Pages: {displayThing.pageCount} </p>
                        <p>Print Price: {displayThing.prices[0].price} </p>
                        <p>Digital Purchase Price: {displayThing.prices[1]?.price ? displayThing.prices[1]?.price : 'unavailable'}</p>
                        <p>UPC: {displayThing.upc} </p>
                    </div> : null}

                {display == 'events' ?
                    <div>
                        <h2>{displayThing.title}</h2>
                        <p>{displayThing.description} </p>

                    </div> : null}

                {display == 'series' ?
                    <div>
                        <h2>{displayThing.title}</h2>
                        <p>{displayThing.rating} </p>
                    </div> : null}

                {display == 'stories' ?
                    <div>
                        <h2>{displayThing.title}</h2>
                        <p>Modified: {displayThing.modified} </p>
                        <p>{displayThing.description} </p>
                    </div> : null}
                <p><ReactAudioPlayer src="pbtheme.mp3" autoPlay /></p>
            </div>
        </div>

    )
}

export default Marvel;

// 1009187

//     / v1 / public / characters / 1009187 / comics

// /v1/public / characters / 1009187 / events 
