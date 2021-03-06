import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (

        <div>
            <body className="homeroom">
                <img src="./nerdlogo.png" className="canva" />

                <ul id="unis">
                    <li>
                        <Link to={`/DD5e`}>Dungeons & Dragons 5th Edition SRD</Link>
                    </li>
                    <li>
                        <Link to={`/Marvel`}>Wakanda</Link>
                    </li>
                    <li>
                        <Link to={`/SaintSeiya`}>Saint Seiya</Link>
                    </li>
                    <li>
                        <Link to={`/StarWars`}>A Galaxy far, far away...</Link>
                    </li>
                    <li>
                        <Link to={`/HarryPotter`}>This is Hogwarts</Link>
                    </li>
                </ul>
            </body>
        </div>
    )
}


export default Home;