import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'


function DDchild(props) {
    console.log(props)
    let [ddData, setDDData] = useState({})
    useEffect(() => {
        const getDD = async () => {
            let DDres = await Axios.get(`https://www.dnd5eapi.co/api/${props.match.params.property}/${props.match.params.child}`)
            console.log(DDres)
            setDDData(DDres.data)
            console.log(ddData)
        }
        getDD();

    }, [])



    return (
        <div>
            DM Says:
            "The thirsty, rabbid goblin swings his rusty shortsword at you"

            *Rolls a nat 20*

            DM says: "uh.... you take 12 damage and you die. RIP."
            {ddData.name}


        </div>
    )
}

export default DDchild;