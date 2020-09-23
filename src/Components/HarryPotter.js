import React from 'react'

function HarryPotter(props) {
    let hpChar = props.hpChar.map((eachChar) => {
        return (
            <div>
                <li>
                    {eachChar.name}
                </li>
            </div>
        )
    })
    return (
        <div>
            Hagrid says:
            "Yer a Blizzurd, Harry."
            <div>
                {hpChar}
            </div>
        </div>
    )
}


export default HarryPotter;
