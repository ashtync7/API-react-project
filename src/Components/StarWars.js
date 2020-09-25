import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

function StarWars() {

    let [starLink, setStarLink] = useState([])

    useEffect(() => {

        const getSWAPI = async () => {
            let SWres = await Axios.get('https://swapi.dev/api/')
            console.log(SWres)
            setStarLink(Object.keys(SWres.data))
        }
        getSWAPI()
    }, [])

    const showStar = () => {
        let starLinksList = starLink.map((eachLink) => {
            return (
                <Link to={`/StarWars/${eachLink}`}><li>{eachLink}</li></Link>
            )
        })
        return (starLinksList)
    }
    return (
        <div>
            Obi Wan Greets you :
            "Hello There!"
            {showStar()}
        </div>
    )
}


export default StarWars;
