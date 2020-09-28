import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import './dd.css'
import { Switch, Route } from 'react-router-dom'
import DDchild from './DDchild'
import ReactAudioPlayer from 'react-audio-player'

function DDproperty(props) {

    let [ddLinks, setDDlinks] = useState([])
    useEffect(() => {
        const getDD = async () => {
            let DDres = await Axios.get(`https://www.dnd5eapi.co/api/${props.match.params.property}`)
            console.log(DDres)
            setDDlinks(DDres.data.results)
        }
        getDD();

    }, [])

    const showDD = () => {
        let ddLinksList = ddLinks.map((eachLink) => {
            return (
                <Link to={`/DD5e/${props.match.params.property}/${eachLink.url.split('/').pop()}`}><li>{eachLink.name}</li></Link>
            )
        })
        return (ddLinksList)
    }

    return (
        <div>

            {showDD()}
            <p><ReactAudioPlayer src="Soad.mp3" autoPlay /></p>

        </div>
    )
}

export default DDproperty;