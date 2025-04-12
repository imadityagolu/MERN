import { useState} from "react";

function StateChange(){

    const [number, setNumber] = useState(20);

    function changeNumber(){
        // for adding 1
        //setNumber(number + 1);
        // or
        setNumber((prevNumber) => prevNumber + 1);

        // for adding with 2
        // add one more time this line:
        //setNumber((prevNumber) => prevNumber + 1);
        
        console.log(number);
    }

    return (
        <>
        <button onClick={changeNumber} className="border text-xl">Click Me</button>
        <p className="text-7xl">{number}</p>
        </>
    );
}

export default StateChange;