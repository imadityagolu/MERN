import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { GrSubtractCircle } from "react-icons/gr";

function LeaderBoard(){

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [country, setCountry] = useState("");
    const [score, setScore] = useState("");
    const [data, setData] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        const obj = {id: Date.now(), name: fname + " " + lname, country: country , score: score, };

        setData((prevData) => {
            const newData = [...prevData, obj];
            return newData.sort((a,b) => b.score - a.score);
        });

        setFname("");
        setLname("");
        setCountry("");
        setScore("");

    }

    function modifyScore(id, sign){
        setData(
            data.map((obj) => obj.id === id ? {...obj, score: sign === "+" ? Number(obj.score) + 5 : Number(obj.score) - 5} : obj)
        );
    }

    function handleDelete(id){
        setData(data.filter((obj) => obj.id !== id));
    }

    return(
        <>
        <form onSubmit = {handleSubmit}>
            <input 
            name="fname" 
            type="text" 
            placeholder="first name" 
            value={fname}
            onChange={(e) => setFname(e.target.value)} 
            required/>

            <input 
            name="lname" 
            type="text" 
            placeholder="last name" 
            value={lname}
            onChange={(e) => setLname(e.target.value)} 
            required/>

            <select 
            value={country}
             onChange={(e) => setCountry(e.target.value)}
            name="country" 
            id="" 
            required>
                <option value="">--select--</option>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="england">England</option>
            </select>

            <input 
            name="score" 
            type="number" 
            placeholder="score" 
            value={score}
            onChange={(e) => setScore(e.target.value)}
            required/>

            <button type="submit">Add</button>
        </form>

        <div className="">
            {data.length > 0 && 
            data.map((obj) => {
                return(
                    <div key={obj.id} className="flex justify-around bg-pink-500 m-5">
                        <p>{obj.name} </p>
                        <p>Country - {obj.country} </p>
                        <p>score: {obj.score} </p>
                        <p 
                        className="flex">

                            <span 
                            onClick={() => handleDelete(obj.id)}><MdDeleteForever /></span>

                            <span 
                            onClick={() => modifyScore(obj.id, "+")}> +5</span>

                            <span 
                            onClick={() => modifyScore(obj.id, "-")}> -5</span>
                        </p>
                    </div>
                )
            })}
        </div>
        </>
    );
}

export default LeaderBoard;