import React, { useState, useEffect } from 'react';
import Axios from 'axios';


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
            <img onClick={getPotter} src="./hathat.png" id="hathat" />

            <div id="YerAwizard">
                <p>{random?.name}</p>
                <p>{random?.school ? random?.school : 'school unknown'}</p>
                <p>{random?.house ? random?.house : 'no house'}</p>
                <p>{random?.patronus ? random?.patronus : 'unkown patronus'}</p>
                <p>{random?.species}</p>
                <p>{random?.bloodStatus ? random?.bloodStatus : 'blood status unknown'}</p>
                <p>{random?.role ? random?.role : 'role unknown'}</p>
                <p>{random?.alias ? random?.alias : 'no known alias'}</p>
                <p>{random?.wand ? random?.wand : 'wand unknown'}</p>
            </div >
        </div >
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
