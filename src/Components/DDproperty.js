import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import DDchild from './DDchild'

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
                <Link to={`/DD5e/${props.match.params.property}/${eachLink.url.split('/').pop()}`}>{eachLink.name}</Link>
            )
        })
        return (ddLinksList)
    }

    return (
        <div>
            DM Says:
            "The thirsty, rabbid goblin swings his rusty shortsword at you"

            *Rolls a nat 20*

            DM says: "uh.... you take 12 damage and you die. RIP."
            {showDD()}
            {/* <Switch>
                <Route exact path="/DD5e/:property/:child" render={(props) => <DDchild ddChild={ddLinks} {...props} />}></Route>
            </Switch> */}
        </div>
    )
}

export default DDproperty;