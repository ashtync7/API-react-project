import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'


function SaintSeiya(props) {
    console.log(props)


    let [seiya, setSeiya] = useState([])

    useEffect(() => {

        const getSeiya = async () => {
            let SeiyaRes = await Axios.get('https://saint-seiya-api.herokuapp.com/api/characters')
            console.log(SeiyaRes.data)
            setSeiya(SeiyaRes.data)
        }
        getSeiya()
    }, [])


    const showSeiya = () => {

        let SeiyaList = seiya.map((eachSaint) => {
            return (
                <p>{eachSaint.name}</p>
                // <Link to={`/SaintSeiya/${props.match.params}/${eachSaint.url.split('/').pop()}`}><li>{eachSaint.name}</li></Link>
            )
        })
        return (SeiyaList)
    }
    return (
        <div>
            {showSeiya}
            Pegasus Ryu sei Ken!!
        </div>
    )
}


export default SaintSeiya;