import { useState} from "react";

function Count() {

    let [counter, setCounter] = useState(0);

    function inc() {
        setCounter(counter + 1);
    }
    
    function dec() {
        setCounter(counter - 1);
    }

    const handleClick = (value, method) => {
        if(method === "decrease"){
            setCounter(counter - 3);
            return;
        }
        setCounter(counter + value);
    }
    
    return(
        <>
        <h1>COUNTER</h1>

        <p>Current value: {counter} =

        {counter % 2 === 0 ? "Even Number" : "Odd Number"}

        </p>

        {/* using without argument */}
        <button onClick={inc}>Increase ++</button> :
        <button onClick={dec}>Decrease --</button>

        <br></br><br></br>

        {/* using with argument */}
        <button onClick={() => {handleClick(5);}}>Increase by 5</button> : 
        
        <button onClick={() => {handleClick(3, "decrease");}}>Drecement by 3</button>

        </>
    );
}

export default Count;