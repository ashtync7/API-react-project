import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './saint.css'
import ReactAudioPlayer from 'react-audio-player'
import { Link } from 'react-router-dom'


function SaintSeiya(props) {
    console.log(props)


    let [seiya, setSeiya] = useState([])
    let [searchSaint, setSearchSaint] = useState([])

    async function saintLookUp(e) {
        console.log(e.target.value)
        let filteredSeiya = seiya.filter((eachOne) => {
            console.log(eachOne)
            return eachOne.name.toLowerCase().includes(e.target.value.toLowerCase())

        })
        setSearchSaint(filteredSeiya)
        // let res = await Axios.get(`https://saint-seiya-api.herokuapp.com/api/characters/search?q=${e.target.value}`)
        // console.log(res)
        // setSearchSaint(res.data)
    }

    useEffect(() => {

        const getSeiya = async () => {
            let SeiyaRes = await Axios.get('https://saint-seiya-api.herokuapp.com/api/characters')
            console.log(SeiyaRes.data)
            setSeiya(SeiyaRes.data)
        }
        getSeiya()
    }, [])


    const showSeiya = () => {

        let SeiyaList = searchSaint.map((eachSaint) => {
            return (
                <div>

                    <h3> {eachSaint.name}</h3>
                    <p><b>Class:</b> {eachSaint.cloths[0]?.class}</p>
                    <p><b>Constellation</b> {eachSaint.cloths[0]?.groupName}</p>
                    <p><b>Cloth:</b>{eachSaint.cloths[0]?.cloth}</p>
                    <p><b>Age:</b> {eachSaint.age ? eachSaint.age : 'unknown'}</p>
                    <p><b>Attacks:</b> {eachSaint.attacks[0]}, {eachSaint.attacks[1]}, {eachSaint.attacks[2]}, {eachSaint.attacks[3]},{eachSaint.attacks[4]}, {eachSaint.attacks[5]}</p>
                    <p><b>Affiliation:</b> {eachSaint.cloths[0]?.affiliation}</p>
                    <p><b>Gender:</b> {eachSaint.gender}</p>
                    <p><b>Born on:</b>{eachSaint.birth}</p>
                    <p><b>Blood Type:</b>{eachSaint.blood}</p>
                    <p><b>Nationality:</b> {eachSaint.nationality}</p>
                    <p><b>Training place:</b> {eachSaint.training}</p>
                    <p><b>Weight:</b> {eachSaint.weight}</p>
                    <p><b>Height:</b> {eachSaint.height}</p>
                    <p><b>Debut:</b> {eachSaint.cloths[0]?.debut}</p>
                    <img src={'https://diegochagas.com/saint-seiya-api/' + eachSaint.image} alt="thisisstupid.jpg" />
                </div>

                /* <img src="https://diegochagas.com/saint-seiya-api/${eachSaint.image}" alt='jpg'> */
                /* <p></p><p>Constellation: {eachSaint.cloths[0}</p> */
            )
            {/* // <Link to={`/SaintSeiya/${props.match.params}/${eachSaint.url.split('/').pop()}`}><li>{eachSaint.name}</li></Link> */ }

        })
        return (SeiyaList)
    }
    return (
        <body id='saintBody'>

            <div className="whoknows">
                Pegasus Ryu sei Ken!!
            <input onChange={saintLookUp} type="text" name="search" />

                <p>{showSeiya()}</p>
                <p><ReactAudioPlayer src="saintSeiya.mp3" autoPlay /></p>
            </div>
        </body>
    )
}


export default SaintSeiya;