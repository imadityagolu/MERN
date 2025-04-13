import axios from "axios";
import { useState } from "react";

function WeatherForcast(){

    const [city, setCity] = useState("");
    const [data, setData] = useState("");

    async function handleData(){
        const result = await axios.get("https://api.openweathermap.org/data/2.5/find?q=" +
        city +
        "&appid=7c08933cd4e4abba0c04f76799b3da7f&units=metric");
        console.log(result);
        setData(result.data.list[0]);
    }
    
    return(
        <>
        <input 
        type="text" 
        placeholder="Enter City Name..." 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        />
        
        <button 
        onClick={handleData}>
        Check</button>
        <p>{data.temp}</p>
        </>
    );
}

export default WeatherForcast;