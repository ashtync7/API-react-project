import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import md5 from 'md5';

function Marvel() {
    let [bpData, setBPData] = useState([])
    useEffect(() => {


        const marvelAgain = async () => {
            let ts = new Date()
            let res = await Axios.get(`http://gateway.marvel.com/v1/public/characters/1009187/comics?ts=${ts}&apikey=${process.env.REACT_APP_MARVELKEY}&hash=${md5(ts + process.env.REACT_APP_PRIVKEY + process.env.REACT_APP_MARVELKEY)}`)
            console.log(res.data.data.results)
            setBPData(res.data.data.results)
        }

        marvelAgain()
    }, [])


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
