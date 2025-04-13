import { useState } from "react";

function ApiCall(){

    const [image, setImage] = useState(null);
    const [name, setName] = useState(null);
    
    async function getRandomData() {

        const response = await fetch("https://randomuser.me/api/");

        const result = await response.json();
    
        setImage(result.results[0].picture.large);

        setName(result.results[0].name.first + " " + result.results[0].name.last);
    }

    return (
    <>
    {/* done using button click*/}
    <button onClick={getRandomData} className="border-2 p-2 m-2">Click Me</button>
    <img src={image} alt={name} />
    <h3>{name}</h3>
    </>
    );
}

export default ApiCall;