import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './star.css'
import { Link } from 'react-router-dom'
import { css } from "@emotion/core";
import FadeLoader from "react-spinners/FadeLoader";
// import vader from 'public/star.jpg'
// import 'src/Components/star.jpg'
function StarWars() {

    let [people, setPeople] = useState([])
    let [planet, setPlanet] = useState([])
    let [films, setFilms] = useState([])
    let [species, setSpecies] = useState([])
    let [vehicles, setVehicles] = useState([])
    let [starship, setStarship] = useState([])


    let [displayThing, setDisplayThing] = useState({ name: '' })

    let [display, setDisplay] = useState('')
    let [loaded, setLoaded] = useState(false)

    console.log(starship)
    useEffect(() => {

        let promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve('my promise is resolved')
            }, 5000)
        })

        let promises = [
            Axios?.get('https://swapi.dev/api/people/'),
            Axios?.get('https://swapi.dev/api/planets/'),
            Axios?.get('https://swapi.dev/api/films/'),
            Axios?.get('https://swapi.dev/api/species/'),
            Axios?.get('https://swapi.dev/api/vehicles/'),
            Axios?.get('https://swapi.dev/api/starships/'),




        ]
        Promise.all(promises).then(res => {
            console.log(res)
            setPeople(res[0].data?.results)
            setPlanet(res[1].data?.results)
            setFilms(res[2].data?.results)
            setSpecies(res[3].data?.results)
            setVehicles(res[4].data?.results)
            setStarship(res[5].data?.results)
            setLoaded(true)
        })

    }, [])

    const showCharacter = () => {
        let person = people[Math.floor(Math.random() * people.length)]
        console.log(person)

        setDisplayThing(person)
        setDisplay('character')
    }

    const showPlanet = () => {
        let singlePlanet = planet[Math.floor(Math.random() * planet.length)]
        console.log(planet)
        console.log(singlePlanet)
        setDisplayThing(singlePlanet)
        setDisplay('planet')
    }
    const showFilms = () => {
        let singleFilm = films[Math.floor(Math.random() * films.length)]
        console.log(films)
        console.log(singleFilm)
        setDisplayThing(singleFilm)
        setDisplay('films')
    }

    const showSpecies = () => {
        let singleSpecie = species[Math.floor(Math.random() * species.length)]
        console.log(species)
        console.log(singleSpecie)
        setDisplayThing(singleSpecie)
        setDisplay('species')

    }

    const showVehicles = () => {
        let singleVehicle = vehicles[Math.floor(Math.random() * vehicles.length)]
        console.log(vehicles)
        console.log(singleVehicle)
        setDisplayThing(singleVehicle)
        setDisplay('vehicles')
    }

    const showStarship = () => {
        let singleStarship = starship[Math.floor(Math.random() * starship.length)]
        console.log(starship)
        console.log(singleStarship)
        setDisplayThing(singleStarship)
        setDisplay('starship')
    }



    return (
        // style={{ backgroundImage: 'url(' + require('src/Components/star.jpg') + ')' }}
        // style={{ backgroundImage: 'url(' + require(vader) + ')' }}
        <body className="background">


            <div >
                {!loaded ? <FadeLoader /> :
                    <div>
                        <button onClick={showCharacter}>Get Character</button>
                        <button onClick={showPlanet}>Get Planet</button>
                        <button onClick={showFilms}>Get Films</button>
                        <button onClick={showSpecies}>Get Species</button>
                        <button onClick={showVehicles}>Get Vehicles</button>
                        <button onClick={showStarship}>Get Starship!</button>

                        {display == 'character' ?
                            <div>
                                <h2 className="swTitle" >{displayThing.name.toUpperCase()}</h2>
                                <p>Born on: {displayThing.birth_year} </p>
                                <p>Eye color: {displayThing.eye_color} </p>
                                <p>Gender: {displayThing.gender} </p>
                                <p>Hair color: {displayThing.hair_color} </p>
                                <p>Height: {displayThing.height} </p>
                                <p>Weight: {displayThing.mass} </p>
                                <p>Skin color: {displayThing.skin_color} </p>
                            </div> : null}

                        {display == 'planet' ?
                            <div>
                                <h2 className="swTitle"> {displayThing.name.toUpperCase()}</h2>
                                <p>Diameter: {displayThing.diameter} </p>
                                <p>Gravity: {displayThing.gravity} </p>
                                <p>Population: {displayThing.population} </p>
                                <p>Rotational period: {displayThing.rotation_period} </p>
                                <p>Terrain type: {displayThing.terrain} </p>
                            </div> : null}

                        {display == 'films' ?
                            <div>
                                <h2 className="swTitle"> {displayThing.title.toUpperCase()}</h2>
                                <p>Director: {displayThing.director} </p>
                                <p>Producer(s): {displayThing.producer} </p>
                                <p>Opening Crawl:
                            <p>{displayThing.opening_crawl}</p> </p>
                            </div> : null}

                        {display == 'species' ?
                            <div>
                                <h2 className="swTitle">{displayThing.name.toUpperCase()}</h2>
                                <p>Average height: {displayThing.average_height} </p>
                                <p>Average fifespan:{displayThing.average_lifespan} </p>
                                <p>Classification: {displayThing.classification} </p>
                                <p>Designation: {displayThing.designation} </p>
                                <p>Eye colors: {displayThing.eye_colors} </p>
                                <p>Hair colors: {displayThing.hair_colors} </p>
                                <p>Languages: {displayThing.language} </p>
                                <p>Skin colors: {displayThing.skin_colors} </p>
                            </div> : null}

                        {display == 'vehicles' ?
                            <div>
                                <h2 className="swTitle">{displayThing.name.toUpperCase()}</h2>
                                <p>Manufacturer: {displayThing.manufacturer} </p>
                                <p>Model: {displayThing.model} </p>
                                <p>Purchase price: {displayThing.cost_in_credits} credits </p>
                                <p>Vehicle class: {displayThing.vehicle_class} </p>
                                <p>Vehicle length: {displayThing.length}M </p>
                                <p>Max atmospheric speed: {displayThing.max_atmosphering_speed} </p>
                                <p>Cargo capacity: {displayThing.cargo_capacity} </p>
                                <p>Passengers: {displayThing.passengers} </p>
                                <p>Operational crew: {displayThing.crew} personel(s) </p>
                                <p>Model: {displayThing.model} </p>
                            </div> : null}

                        {display == 'starship' ?
                            <div>
                                <h2 className="swTitle"> {displayThing.name.toUpperCase()}</h2>
                                <p>Manufacturer: {displayThing.manufacturer}</p>
                                <p>Model: {displayThing.model} </p>
                                <p>Purchace price: {displayThing.cost_in_credits} credits</p>
                                <p>Starship Class: {displayThing.starship_class} </p>
                                <p>Starship length: {displayThing.length}M</p>
                                <p>Max atmospheric speed: {displayThing.max_atmosphering_speed} </p>
                                <p>Cargo capacity: {displayThing.cargo_capacity}</p>
                                <p>Passengers: {displayThing.passengers} </p>
                                <p>Operational Crew: {displayThing.crew} personel(s)</p>
                                <p>MGLT: {displayThing.MGLT}</p>
                                <p>Consumables: {displayThing.consumables}</p>
                                <p>Hyperdrive Rating: {displayThing.hyperdrive_rating}</p>

                            </div> : null}

                        <div>







                        </div>

                    </div>}

            </div>
        </body>
    )
}


export default StarWars;
