import React from 'react';
// import Axios from 'axios';

function Marvel() {
    // let [blackPanther, setBlackPanther] = useState([]);
    // const getBP = async () => {
    //     let BPres = await Axios.get("link")
    //     console.log(BPres.data)
    //     setBlackPanther(BPres.data)
    // }
    // useEffect(() => {
    //     getBP()
    // })

    return (
        <div id="panther">

            <header>
                <img src="./BP.jpg" className="BPheader" />
            </header>

            <p id="BPtext">Dedicated to Chadwick Boseman // "Wakanda Forever" :'( </p>


            <button id="BPbuttons">IN COMICS</button>
            <button id="BPbuttons">IDK</button>
            <button id="BPbuttons">YUP</button>
            <button id="BPbuttons">AND SO ON</button>

        </div>
    )
}

export default Marvel;
