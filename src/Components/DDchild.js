import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'


function DDchild(props) {
    console.log(props)
    let [ddData, setDDData] = useState({})

    useEffect(() => {
        const getImage = async () => {
            let unsplashImg = await Axios.get(`https://api.unsplash.com/search/photos?query=dragon&client_id=ur67i-2L0rtMC3P-SxpENcEgB_vsWEaF1A2sMegpB6s`)
            console.log(unsplashImg.data.results)
        }
        getImage()
    })


    useEffect(() => {
        const getDD = async () => {
            let DDres = await Axios.get(`https://www.dnd5eapi.co/api/${props.match.params.property}/${props.match.params.child}`)
            console.log(DDres.data)
            setDDData(DDres.data)
            console.log(ddData)
        }
        getDD();

    }, [])

    // // let [prof, setProf] = useState([])

    function getProf() {
        return ddData.proficiencies?.map((eachProf) => {
            return (
                <div>
                    <ul>
                        <li>{eachProf.proficiency.name}</li>
                        <li>Bonus: {eachProf.value}</li>
                    </ul>
                </div>
            )
        })
    }

    const showData = () => {
        let stuff = []
        for (let key in ddData) {
            if (key != "url" && key != "index") {
                if (typeof ddData[key] !== "object") {

                    stuff.push(<li>{key} : {JSON.stringify(ddData[key])}</li>)
                } else {
                    for (let key2 in ddData[key]) {
                        stuff.push(<li>sub: {key2}: {JSON.stringify(ddData[key][key2])}</li>)
                    }
                }
            }

        }
        console.log(stuff)
        return stuff
    }

    return (
        <div>
            {showData()}
            {/* <h1>{ddData.name} {ddData.full_name}</h1>
            <div>
                {ddData.desc}
                <p> {ddData.skills?.name}</p>
            </div>
            <div>
                <p>{ddData.alignment}</p>
                <p>Armor Class: {ddData.armor_class}</p>
                <p>{ddData.challenge_rating}</p>
                <p>{ddData.condition_immunities}</p>
                <p>{ddData.damage_immunities}</p>
                <p>{ddData.damage_vulnerabilities}</p>
                <p>{ddData.hit_dice}</p>
                <p>{ddData.hit_points}</p>
                <p>{ddData.languages}</p>
                {getProf()} */}
            {/* <p>{ddData.proficiencies[0]?.proficiency.name}</p> */}
        </div>



        // </div >
    )
}

export default DDchild;