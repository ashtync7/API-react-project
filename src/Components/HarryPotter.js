import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

// <form onSubmit={idk what to put here}>
//     <input type="image" src={'/sortinghat'}></input>
// </form >

// OR <button onClick={message}> Press me to print a message! </button>


function HarryPotter(props) {
    let [hpChar, setHpChar] = useState([]);
    const getPotter = async () => {
        let HPres = await Axios.get("https://www.potterapi.com/v1/characters?key=$2a$10$AkgCGEKIUDVqXQ.rjYiMgu3kTgjm4QVSxU9zz188JXV7VPWSZaiOW")
        console.log(HPres.data)
        setHpChar(HPres.data)
    }
    useEffect(() => {


        getPotter()
    }, [])

    console.log(hpChar)
    let random = hpChar[Math.floor(Math.random() * hpChar.length)]
    console.log(random)

    return (

        <div>
            <img onClick={getPotter} src="./sortinghat.png" />
            {random?.name},
            {random?.school ? random?.school : 'school unknown'},
            {random?.house ? random?.house : 'no house'},
            {random?.patronus ? random?.patronus : 'unkown patronus'},
            {random?.species},
            {random?.bloodStatus ? random?.bloodStatus : 'blood status unknown'},
            {random?.role ? random?.role : 'role unknown'},
            {random?.alias ? random?.alias : 'no known alias'},
            {random?.wand ? random?.wand : 'wand unknown'}
        </div>
    )
    // let hpChar = props.hpChar.map((eachChar) => {
    //     return (
    //         <div>
    //             <li>
    //                 {eachChar.name}
    //             </li>
    //         </div>
    //     )
    // }

    // function RandomChar(props) {
    //     let [randomChar, setRandomChar] = useState([]);
    //     useEffect(() => {
    //         async function getRandomChar() {

    //         }
    //     })
    // }

    // return (
    //     <div>
    //         Hagrid says:
    //         "Yer a Blizzurd, Harry."
    //         <div>
    //             {hpChar}
    //         </div>
    //     </div>
    // )

}

export default HarryPotter;
