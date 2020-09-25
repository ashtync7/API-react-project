import React, { useState, useEffect } from 'react'
import Axios from 'axios'


function StarWars2() {

    let [starLink, setStarLink] = useState([])

    useEffect(() => {

        const getSWAPI = async () => {
            let SWres = await Axios.get('https://swapi.dev/api/')
            console.log(SWres)
            setStarLink(Object.keys(SWres.data))
        }
        getSWAPI()
    }, [])

}

export default StarWars2;